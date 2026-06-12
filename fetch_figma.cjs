const fs = require('fs');

async function fetchFigma() {
  const token = 'figd_DAqJLmQYO3C2PHVkTmuF7Ljri9nVCGOY85KAiNgN';
  const fileKey = 'iRzbkD6B7zGDZmpU5V3Bah';
  
  try {
    console.log('Fetching Figma document...');
    const res = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
      headers: { 'X-Figma-Token': token }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
    fs.writeFileSync('figma.json', JSON.stringify(data, null, 2));
    console.log('Successfully saved to figma.json');
  } catch (error) {
    console.error('Error fetching Figma:', error);
  }
}

fetchFigma();
