let selectedClass = "";

const menuDetail = {
"Strawberry Crumble Cheese Cake": `
🍽️ BAKING CLASS COUPLE: STRAWBERRY CRUMBLE CHEESE CAKE 🍰

🗓️ Rabu, 07 Januari 2026
⏰ 10.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kec. Kiaracondong, Kota Bandung
📌 See Map

💰 Price: Rp170.000

⭐ Benefit:
• Baking class session with Bake Ease
• Baking tools & ingredients provided
• Tripod
• Bring home your baking (Strawberry Crumble Cheesecake 10 cm)
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• DIY Bracelet Couple
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`,

"Brownies Cookies": `
🍽️ BAKING CLASS COUPLE: BROWNIES COOKIES 🍰

🗓️ Sabtu, 10 Januari 2026
⏰ 10.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kota Bandung
📌 See Map

💰 Price: Rp170.000

⭐ Benefit:
• Baking class session with Bake Ease
• Baking tools & ingredients provided
• Tripod
• Bring home your baking (Brownies Cookies)
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• DIY Bag Charm Couple
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`,

"Ichigo Daifuku": `
🍽️ BAKING CLASS COUPLE: ICHIGO DAIFUKU 🍓

🗓️ Sabtu, 10 Januari 2026
⏰ 14.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kota Bandung
📌 See Map

💰 Price: Rp150.000

⭐ Benefit:
• Japanese dessert class session
• Baking tools & ingredients provided
• Tripod
• Bring home your baking (Ichigo Daifuku)
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• Free Live Drawing
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`,

"Italian Cake": `
🍽️ BAKING CLASS COUPLE: ITALIAN CAKE 🎂

🗓️ Minggu, 11 Januari 2026
⏰ 10.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kota Bandung
📌 See Map

💰 Price: Rp165.000

⭐ Benefit:
• Baking class session with Bake Ease
• Baking tools & ingredients provided
• Tripod
• Bring home your baking (Italian Cake 10 cm)
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• Free Live Drawing
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`,

"Red Velvet Cake": `
🍽️ BAKING CLASS COUPLE: RED VELVET CAKE 🎂

🗓️ Minggu, 11 Januari 2026
⏰ 14.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kota Bandung
📌 See Map

💰 Price: Rp150.000

⭐ Benefit:
• Baking class session with Bake Ease
• Baking tools & ingredients provided
• Tripod
• Bring home your baking (Red Velvet Cake)
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• Free Live Drawing
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`,

"Tom N Jerry Cheese Cake": `
🍽️ BAKING CLASS COUPLE: TOM N JERRY CHEESE CAKE 🎂

🗓️ Rabu, 14 Januari 2026
⏰ 10.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kota Bandung
📌 See Map

💰 Price: Rp160.000

⭐ Benefit:
• Themed baking class session
• Baking tools & ingredients provided
• Tripod
• Bring home your baking
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• Free Flowers
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`,

"Tiramisu": `
🍽️ BAKING CLASS COUPLE: TIRAMISU ☕

🗓️ Sabtu, 17 Januari 2026
⏰ 14.00 WIB

📍 150 Coffee and Garden
Jl. Sulaksana No.50, Cicaheum, Kota Bandung
📌 See Map

💰 Price: Rp150.000

⭐ Benefit:
• Dessert class session
• Baking tools & ingredients provided
• Tripod
• Bring home your baking (Tiramisu)
• Tutor by professional chef
• Recipe included
• Apron Couple Included
• DIY Bracelet Couple
• Certificate

🚫 NO REFUND & NO CANCEL 🚫
`
};

function openMenu(menu){
  selectedClass = menu;

  document.getElementById("menuContent").innerHTML = `
    <div class="modal-content">
      <h3>${menu}</h3>
      <p>${menuDetail[menu]}</p>
    </div>
  `;

  const waText = encodeURIComponent(
    `Halo Bake Ease 💕
Saya ingin reservasi kelas:
${menu}`
  );

  document.getElementById("waButton").href =
    `https://wa.me/6289656640795text=${waText}`;

  document.getElementById("menuModal").style.display = "flex";
}

function closeMenu(){
  document.getElementById("menuModal").style.display = "none";
}
