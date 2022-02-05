const products = [
  {
    id: "1",
    title: "Diverse Men's Regular Formal Shirt",
    price: 759,
    rating: 5,
    count: 1,
    specification: [
      "Care Instructions: Machine Wash",
      "Fit Type: Regular",
      "Regular fit and Full sleeve shirt",
      "Pattern - Printed Men’s Formal Shirt",
      "Double yoke for extra durability & stiffness; Patch pocket at chest",
      "Machine wash",
      "Made in India",
      "Material: 100% Cotton",
    ],
    detail:
      "Crafted in a pure cotton fabric, this long-sleeved, regular-fit modern shirt offers superb comfort and an impeccable finish. A reliable option for business wear, the shirt features a modern kent collar and double button mitered cuffs, a shirttail hem and a chest patch pocket. Team with tailored trousers and blazer for a pared-back professional look.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81qlnA0rJEL._UL1500_.jpg",
  },
  {
    id: "2",
    title: "REDMI Note 10 (Aqua Green, 64 GB)  (4 GB RAM)",
    price: 13999,
    rating: 3,
    count: 1,
    specification: [
      "Display: FHD+ (1080x2400) AMOLED Dot display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio",
      "Camera: 48 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera",
      "Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity",
      "Processor: Qualcomm Snapdragon 678 with Kryo 460 Octa-core; 11nm process; Up to 2.2GHz clock speed",
      "Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)",
    ],
    detail:
      "‎Dual Stereo Speakers for immersive audio experience, The display is protected by Corning Gorilla Glass 3, 33W Fast Charger in box, 67% in 30 mins, 3.5mm Jack, IR Blaster, Dedicated Micro SD Slot, Z-Axis Linear Vibration Motor, 48 MP AI Quad Camera Setup 8MP Ultrawide-FOV 118 degrees 2 MP Macro Sensor 2 MP Depth Sensor Slow Motion Support - Up to 960 fps Portrait | Panaroma | Time Lapse | Pro Mode | Night Mode | Short Video Mode | Ultra wide-angle distortion correction | Custom Watermark | Document mode | HDR | AI scene detection | Video macro mode | Movie frame | Time burst | Google Lens| AI Watermark",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71OGzLCrjZS._SL1500_.jpg",
  },
  {
    id: "3",
    title: "Lenovo Tab M10 HD 2nd Gen (10.1 inch, 4 GB, 64 GB, Wi-Fi+LTE)",
    price: 10999,
    rating: 4,
    count: 1,
    specification: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
      "25.65 cm (10.1 inch) HD Display",
      "8 MP Primary Camera | 5 MP Front",
      "Android 10 | Battery: 5000 mAh Lithium Polymer",
      "Processor: MediaTek Helio P22T Octa Core Processor",
    ],
    detail:
      "The 10.1” HD IPS panel with 400 nits brightness, TUV certification and narrow bezels pack a pixel-perfect visual experience, that’s also portable. The sleek profile and all-metal finish add on to the beauty. Rely on MediaTek Helio P22T Octa Core processor to keep things running faster and smoother. On top of that, Android 10 brings in features like dark theme, smart reply and focus mode.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41jdvXSoeyS._SL1000_.jpg",
  },
  {
    id: "4",
    title:
      "HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop",
    price: 59999,
    rating: 4,
    count: 1,
    specification: [
      "2.5GHz Intel i5-10300H 10th Gen processor",
      "8GB DDR4 RAM",
      "1TB 7200rpm hard drive + 256GB SSD",
      "16-inch screen, NVIDIA GeForce GTX 1650 4GB Graphics",
      "Windows 10 Home operating system",
      "2.35kg laptop",
    ],
    detail:
      "It’s not just another gaming laptop, it’s THE gaming laptop. Obviously, the OMEN 15 has a powerful Intel® processor and NVIDIA® graphics in a compact frame. Did we mention it has a fast display and long battery life? Yeah, it has everything and you can take it even further with OMEN Gaming Hub. So, just enjoy those envious looks while you play, it’s only natural with a beautiful machine. The OMEN 15 is a perfect example of how there can never be too much of a good thing. With a powerful Intel® processor and NVIDIA® graphics cooled by OMEN Tempest Cooling, it makes you think how it all fits into such a tiny little package.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg",
  },
  {
    id: "5",
    title: "crocs Unisex-Adult Bayaband Clog",
    price: 2300,
    rating: 4,
    count: 1,
    specification: [
      "Closure: Pull-On",
      "Shoe Width: Regular",
      "Outer Material: EVA",
      "Closure Type: Slip On",
      "Toe Style: Round Toe",
      "Warranty Type: Manufacturer",
      "Warranty Description: 90 days",
    ],
    detail:
      "The product will be an excellent pick for you. It ensures an easy maintenance.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/712Brp0hwfL._UL1500_.jpg",
  },
  {
    id: "6",
    title:
      "LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel",
    price: 17999,
    rating: 5,
    count: 1,
    specification: [
      "27 inch 4K UHD (3840 x 2160) Resoltion with HDR 10",
      "IPS Screen with 178/178 deg viewing angle with 300 nits brightness",
      "Color Calibrated Display with sRGB 99% and 1.07 Billion Color",
      "Radeon Freesync - Gaming Features - DAS Mode and Black Stablizer",
      "Connectivity: HDMI x 2 , Display Port & Headphone out",
      "VESA Wall Mount 100 x 100",
      "HDCP 2.2 for Displaying 4K Content from Streaming Service & Game Console",
    ],
    detail:
      "LG IPS display has extraordinary color accuracy, covering 98% of the sRGB color spectrum. It also has a wider viewing angle, so it's even easier to enjoy true color visuals. Radeon FreeSync reduces the tearing and stuttering that occur between a graphic card's frame rate and a monitor's refresh rate enabling smoother motion and less stuttering in demanding games.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: "7",
    title: "The Power of HABIT",
    detail:
      "The Power of HABIT: Why We Do What We Do in Life and Business. A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.",
    price: 1633,
    author: "Charles Duhigg",
    type: "hardcover",
    rating: 5,
    count: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ejXdSceNL._AA300_.jpg",
    inCart: false,
    category: "business",
  },
  {
    id: "8",
    title: "Think and Grow Rich",
    rating: 3,
    count: 1,
    detail:
      "'Think and Grow Rich!' explains entrepreneur Andrew Carnegie’s secret to success, revealed to Napoleon Hill during private interviews with Carnegie, the richest man of his time, and during more than 20 years of research into the lives and philosophies of more than 500 of the most successful people in America. This timeless classic presents a systematic nuts-and-bolts approach to developing the skills and mindset required to achieve exceptional success in any field or endeavor, personal or professional. Hill explains in detail 13 steps required to achieve those goals. The book contains numerous self-tests and checklists.",
    price: 898,
    author: "Napoleon Hill",
    type: "hardcover",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ZouHoBGtL._SX315_BO1,204,203,200_.jpg",
    inCart: false,
    category: "business",
  },
  {
    id: "10",
    title: "The 7 Habits of Highly Effective People",
    rating: 4,
    count: 1,
    detail:
      "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change. The 7 Habits of Highly Effective People, the beloved classic that has sold over 20 million copies worldwide, is celebrating its 25th anniversary with this reissue! With a new foreword, the wisdom of the 7 Habits still holds true after all these years. The 7 Habits have become so famous because they work. They have been integrated into everyday thinking by many millions of people. The reason: They work. Habit 1: Be Proactive. Habit 2: Begin with the End in Mind. Habit 3: Put First Things First. Habit 4: Think Win/Win. Habit 5: Seek First to Understand, Then to Be Understood. Habit 6: Synergize. Habit 7: Sharpen the Saw. The book presents a principle-centered approach for solving personal and professional problems.",
    price: 1148,
    author: "Stephen R. Covey",
    type: "paperback",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Myx6jMujL._AA300_.jpg",
    inCart: false,
    category: "business",
  },
  {
    id: "11",
    title: "Principles: Life and Work",
    rating: 4,
    count: 1,
    detail:
      "In Principles, Dalio shares what he's learned over the course of his remarkable career. He argues that life, management, economics, and investing can all be systemized into rules and understood like machines.",
    price: 1800,
    author: "Ray Dalio",
    type: "hardcover",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51UyMOpP%2BGL._AA300_.jpg",
    inCart: false,
    category: "business",
  },
  {
    id: "12",
    title: "How to Win Friends & Influence People",
    rating: 5,
    count: 1,
    detail:
      "For more than sixty years the rock-solid, time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestseller is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!",
    price: 960,
    author: "Dale Carnegie",
    type: "paperback",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg",
    inCart: false,
    category: "business",
  },
  {
    id: "13",
    title: "The Whole 30",
    rating: 2,
    count: 1,
    detail:
      "Since 2009, Melissa Hartwig’s critically-acclaimed Whole30 program has quietly led hundreds of thousands of people to effortless weight loss and better health—along with stunning improvements in sleep quality, energy levels, mood, and self-esteem. The program accomplishes all of this by specifically targeting people’s habits and emotional relationships with food. The Whole30 is designed to help break unhealthy patterns of behavior, stop stress-related comfort eating, and reduce cravings, particularly for sugar and carbohydrates. Many Whole30 participants have described achieving 'food freedom'—in just thirty days.",
    price: 1899,
    author: "Melissa Hartwig",
    type: "hardcover",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61WFjEDBktL._SX437_BO1,204,203,200_.jpg",
    inCart: false,
    category: "cookbooks",
  },
  {
    id: "14",
    title: "The Food Lab",
    rating: 3,
    count: 1,
    detail:
      "Ever wondered how to pan-fry a steak with a charred crust and an interior that's perfectly medium-rare from edge to edge when you cut into it? How to make homemade mac 'n' cheese that is as satisfyingly gooey and velvety-smooth as the blue box stuff, but far tastier? How to roast a succulent, moist turkey (forget about brining!)―and use a foolproof method that works every time?",
    price: 2394,
    author: "J. Kenji López-Alt",
    type: "harcover",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/419aGgQt-5L._SX392_BO1,204,203,200_.jpg",
    inCart: false,
    category: "cookbooks",
  },
  {
    id: "15",
    title: "True Fiction (Ian Ludlow Thrillers)",
    rating: 5,
    count: 1,
    detail:
      "A breakneck thriller where truth and fiction collide for the unluckiest writer alive.",
    price: 499,
    author: "Lee Goldberg",
    type: "kindle",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51UbplnqSgL._SX331_BO1,204,203,200_.jpg",
    inCart: false,
    category: "mystery",
  },
  {
    id: "16",
    title: "The Last Move",
    rating: 4,
    count: 1,
    detail:
      "An FBI agent must catch a copycat killer. The only difference this time: she's the final victim.",
    price: 791,
    author: "Mary Burton",
    type: "paperback",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/514jRDA21TL._AA300_.jpg",
    inCart: false,
    category: "mystery",
  },
  {
    id: "17",
    title: "Stillhouse Lake (Stillhouse Lake Series)",
    rating: 3,
    count: 1,
    detail:
      "Gina Royal is the definition of average—a shy Midwestern housewife with a happy marriage and two adorable children. But when a car accident reveals her husband’s secret life as a serial killer, she must remake herself as Gwen Proctor—the ultimate warrior mom.",
    price: 896,
    author: "Rachel Caine",
    type: "paperback",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41RTt7alEqL._SX332_BO1,204,203,200_.jpg",
    inCart: false,
    category: "mystery",
  },
  {
    id: "18",
    title: "Harry Potter and the Sorcerer's Stone",
    rating: 4,
    count: 1,
    detail:
      "On Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    price: 2464,
    author: "J.K.Rowling",
    type: "hardcover",
    image: "https://images-na.ssl-images-amazon.com/images/I/51qlgJ6ZojL.jpg",
    inCart: false,
    category: "scifi",
  },
  {
    id: "19",
    rating: 4,
    count: 1,
    title: "A Game of Thrones: A Song of Ice and Fire, Book 1",
    detail:
      "As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced.",
    price: 2516,
    author: "George R. R. Martin",
    type: "hardcover",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51n5SAiAz7L._AA300_.jpg",
    inCart: false,
    category: "accessories",
  },
  {
    id: "20",
    title: "The Lord of the Rings: One Volume",
    rating: 3,
    count: 1,
    detail:
      "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.",
    price: 2766,
    author: "J.R.R. Tolkien",
    type: "hardcover",
    image: "https://images-na.ssl-images-amazon.com/images/I/51d4G0sFMzL.jpg",
    inCart: false,
    category: "scifi",
  },
];

const headerItems = [
  "All",
  "BestSeller",
  "Mobiles",
  "Electronic",
  "Fashion",
  "New Releases",
  "Customer Service",
  "Computers",
  "Home & Kitchen",
  "Today's Deals",
];

export { products, headerItems };
