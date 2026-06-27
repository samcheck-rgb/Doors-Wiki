const floors = [
  { name: 'Hotel', theme: 'hotel' },
  { name: 'The Mines', theme: 'mines' },
  { name: 'The Rooms', theme: 'rooms' },
  { name: 'The Backdoor', theme: 'backdoor' },
  { name: 'Void', theme: 'void' }
];

const floorGrid = document.querySelector('#floors .card-grid');

floors.forEach(floor => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${floor.name}</h3><p>Click to apply the ${floor.name} theme.</p>`;
  card.addEventListener('click', () => setTheme(floor.theme));
  floorGrid.appendChild(card);
});
