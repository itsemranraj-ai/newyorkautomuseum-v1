const fs = require('fs');
const path = require('path');

const htmlPath = 'C:/Users/Al Emran/.gemini/antigravity/brain/623859b2-cff4-454d-a583-010f91da43f1/scratch/com_original.html';
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&#9654;/g, '')
    .replace(/&#9660;/g, '')
    .replace(/[\u25B6\u25BC]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. EXTRACT SPOTLIGHTS
const spotMatches = [...rawHtml.matchAll(/<section[^>]*class=["'][^"']*spotlight[^"']*["'][^>]*>([\s\S]*?)<\/section>/gi)];
const spotlights = spotMatches.map(m => {
  const content = m[1];
  const imgM = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  const h2M = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const pM = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(p => cleanText(p[1]));
  return {
    image: imgM ? imgM[1] : '',
    title: h2M ? cleanText(h2M[1]) : '',
    paragraphs: pM
  };
});

// 2. EXTRACT SECTION THREE (THE BOARD & ADVISORS)
const sec3M = rawHtml.match(/<section id="three"[\s\S]*?<\/section>/i);
const advisorsCategories = [
  'Executive Leadership & Curatorial Strategy',
  'OEM, Industry & Mobility Strategy',
  'Art, Design & Digital Storytelling',
  'Motorsport, Classic Cars & Collecting',
  'Events, Experiences & Live Production',
  'Design, Preservation & Institutional Development',
  'Licensing, Media & Brand Strategy',
  'Strategy, Technology & Security',
  'Volunteers',
  'ADMINISTRATIVE SUPPORT'
];

const parsedCategories = [];
if (sec3M) {
  const sec3 = sec3M[0];
  for (let i = 0; i < advisorsCategories.length; i++) {
    const catName = advisorsCategories[i];
    const nextCat = advisorsCategories[i + 1];
    
    const catEscaped = catName.replace(/&/g, '(?:&|&amp;)');
    const catRegex = new RegExp('<(?:h2|h3)[^>]*>\\s*' + catEscaped + '\\s*<\\/(?:h2|h3)>', 'i');
    const mStart = sec3.match(catRegex);
    if (!mStart) continue;
    const startIdx = mStart.index + mStart[0].length;
    
    let endIdx = sec3.length;
    if (nextCat) {
      const nextEscaped = nextCat.replace(/&/g, '(?:&|&amp;)');
      const nextRegex = new RegExp('<(?:h2|h3)[^>]*>\\s*' + nextEscaped + '\\s*<\\/(?:h2|h3)>', 'i');
      const mEnd = sec3.slice(startIdx).match(nextRegex);
      if (mEnd) endIdx = startIdx + mEnd.index;
    }
    
    const catChunk = sec3.slice(startIdx, endIdx);
    
    const people = [];
    const personRegex = /<h3>([\s\S]*?)<\/h3>\s*<div class="position">([\s\S]*?)<\/div>/gi;
    let pm;
    while ((pm = personRegex.exec(catChunk)) !== null) {
      const name = cleanText(pm[1]);
      if (name.toLowerCase() === 'cto committee') continue;
      const position = cleanText(pm[2]);
      
      const afterPerson = catChunk.slice(pm.index + pm[0].length, pm.index + pm[0].length + 4000);
      const pMatch = afterPerson.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      let bio = '';
      if (pMatch) {
        let pContent = pMatch[1];
        pContent = pContent.replace(/<span id="dots\d+">[\s\S]*?<\/span>/gi, '');
        pContent = pContent.replace(/<\/?span[^>]*>/gi, '');
        bio = cleanText(pContent);
      }
      
      const liMatch = afterPerson.match(/window\.open\(["'](https?:\/\/[^"']+)["']/i);
      const linkedin = liMatch ? liMatch[1] : '';
      
      people.push({ name, position, bio, linkedin });
    }
    
    parsedCategories.push({
      category: catName,
      members: people
    });
  }
}

// 3. EXTRACT SECTION BOARDS (BOARDS & COMMITTEES)
const boardsM = rawHtml.match(/<section id="boards"[\s\S]*?<\/section>/i);
let wingDevelopmentCommittees = [];
let donationCommittees = [];

if (boardsM) {
  const boardsHtml = boardsM[0];
  const splitIdx = boardsHtml.indexOf('Committees (Suggested Tax-Deductible Donations)');
  const part1 = boardsHtml.slice(0, splitIdx);
  const part2 = boardsHtml.slice(splitIdx);
  
  function getToggles(chunk) {
    const list = [];
    const re = /<div class="collapsible-toggle"[^>]*>([\s\S]*?)<\/div>\s*<div class="collapsible-content"[^>]*>([\s\S]*?)<\/div>/gi;
    let tm;
    while ((tm = re.exec(chunk)) !== null) {
      const title = cleanText(tm[1]);
      const desc = cleanText(tm[2]);
      list.push({ title, description: desc });
    }
    return list;
  }
  
  const allPart1 = getToggles(part1);
  wingDevelopmentCommittees = allPart1.filter(item => !item.title.toLowerCase().includes('museum wing development'));
  
  const allPart2 = getToggles(part2);
  donationCommittees = allPart2.filter(item => !item.title.toLowerCase().includes('suggested tax-deductible'));
}

// 4. EXTRACT SECTION CAREERS
const careersM = rawHtml.match(/<section id="careers"[\s\S]*?<\/section>/i);
let careerDepartments = [];
if (careersM) {
  const cHtml = careersM[0];
  
  const depts = [
    'Leadership',
    'Operations & Administration',
    'Curatorial',
    'Marketing & Communications',
    'Technology & Data',
    'Community & Programs'
  ];
  
  for (let i = 0; i < depts.length; i++) {
    const dName = depts[i];
    const nextD = depts[i + 1];
    
    const dPattern = new RegExp('<div class="collapsible-toggle"[^>]*>\\s*(?:&#9654;|▶)?\\s*' + dName.replace(/&/g, '(?:&|&amp;)') + '\\s*<\\/div>\\s*<div class="collapsible-content">', 'i');
    const dStartM = cHtml.match(dPattern);
    if (!dStartM) continue;
    const dStart = dStartM.index + dStartM[0].length;
    
    let dEnd = cHtml.length;
    if (nextD) {
      const nextPattern = new RegExp('<div class="collapsible-toggle"[^>]*>\\s*(?:&#9654;|▶)?\\s*' + nextD.replace(/&/g, '(?:&|&amp;)') + '\\s*<\\/div>', 'i');
      const nextM = cHtml.slice(dStart).match(nextPattern);
      if (nextM) dEnd = dStart + nextM.index;
    }
    
    const dChunk = cHtml.slice(dStart, dEnd);
    
    const jobRegex = /<div class="collapsible-toggle"[^>]*>([\s\S]*?)<\/div>\s*<div class="collapsible-content">([\s\S]*?)<\/div>/gi;
    const jobs = [];
    let jm;
    while ((jm = jobRegex.exec(dChunk)) !== null) {
      const jobTitle = cleanText(jm[1]);
      const content = jm[2];
      const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      let desc = '';
      let applyMailto = 'mailto:hr@newyorkautomuseum.com';
      if (pMatch) {
        const fullP = pMatch[1];
        const mailMatch = fullP.match(/href=["'](mailto:[^"']+)["']/i);
        if (mailMatch) applyMailto = mailMatch[1];
        desc = cleanText(fullP.replace(/<a[^>]*>[\s\S]*?<\/a>/gi, ''));
      }
      
      jobs.push({
        title: jobTitle,
        description: desc,
        applyUrl: applyMailto
      });
    }
    
    careerDepartments.push({
      department: dName,
      jobs: jobs
    });
  }
}

// 5. SAVE ALL TO JSON
const outDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'advisors.json'), JSON.stringify(parsedCategories, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'boards.json'), JSON.stringify({
  wingDevelopmentCommittees,
  donationCommittees
}, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'careers.json'), JSON.stringify(careerDepartments, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'spotlights.json'), JSON.stringify(spotlights, null, 2), 'utf8');

console.log('EXTRACTION COMPLETE:');
console.log('- Spotlights:', spotlights.length);
console.log('- Advisors categories:', parsedCategories.length, 'Total members:', parsedCategories.reduce((s, c) => s + c.members.length, 0));
console.log('- Wing Development Committees:', wingDevelopmentCommittees.length);
console.log('- Donation Committees:', donationCommittees.length);
console.log('- Career Departments:', careerDepartments.length, 'Total jobs:', careerDepartments.reduce((s, d) => s + d.jobs.length, 0));
