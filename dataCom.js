var watches = [
    { "id" : "", "name": "", "image": "", "feature1": ["Feature A", "Feature B"]},
    { "id": "watch1", "name": "Citizen Tsuno Chrono", "image": "Pictures/citizen/c2.png", "price":["24000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["5 Years"] , "feature4": ["No"] },
    { "id": "watch2", "name": "Citizen Series8 GMT", "image": "Pictures/citizen/c3.jpg", "price":["24000$"], "feature1": ["Yes"] , "feature2": ["Mineral Crystal"] , "feature3": ["5 Years"] , "feature4": ["No"] },
    { "id": "watch3", "name": "Citizen Attesa", "image": "Pictures/citizen/c4.jpg", "price":["28000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["5 Years"] , "feature4": ["No"] },
    { "id": "watch4", "name": "Diesel Mega Chief", "image": "Pictures/diesel/d1.jpeg", "price":["1000$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years"] , "feature4": ["SNo"] },
    { "id": "watch5", "name": "Geneva Chrono Classic", "image": "Pictures/geneva/g1.png", "price":["14500$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years International"] , "feature4": ["No"] },
    { "id": "watch6", "name": "Genava Chrono Silver", "image": "Pictures/geneva/g2.png", "price":["13300$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years International"] , "feature4": ["No"] },
    { "id": "watch7", "name": "Geneva Quartz Gold", "image": "Pictures/geneva/g3.png", "price":["56000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["2 Years International"] , "feature4": ["No"] },
    { "id": "watch8", "name": "Geneva Platinum Exclusive", "image": "Pictures/geneva/g4.png", "price":["76000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["2 Years International"] , "feature4": ["No"] },
    { "id": "watch9", "name": "Geneva Quartz Swiss", "image": "Pictures/geneva/g5.png", "price":["189000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["2 Years International"] , "feature4": ["2333 Units"] },
    { "id": "watch10", "name": "Goldlis Catawiki", "image": "Pictures/goldlis/g1.jpg", "price":["76000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["1 Year"] , "feature4": ["10000 Units"] },
    { "id": "watch11", "name": "Goldlis montre Homme", "image": "Pictures/goldlis/g3.jpeg", "price":["64000$"], "feature1": ["No"] , "feature2": ["Sapphire Crystal"] , "feature3": ["1 Year"] , "feature4": ["10000 Units"] },
    { "id": "watch12", "name": "Kenneth Cole Skeleton", "image": "Pictures/kenneth/k1.jpg", "price":["13000$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years"] , "feature4": ["10000 Units"] },
    { "id": "watch13", "name": "Kenneth Cole KC4638", "image": "Pictures/kenneth/k2.jpg", "price":["1500$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years"] , "feature4": ["No"] },
    { "id": "watch14", "name": "Kenneth Cole New York", "image": "Pictures/kenneth/k3.jpg", "price":["7800$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years"] , "feature4": ["No"] },
    { "id": "watch15", "name": "MontBlanc Star Legacy Chronograph", "image": "Pictures/MontBlanc/m3.jpg", "price":["56000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["1 Year"] , "feature4": ["No"] },
    { "id": "watch16", "name": "MontBlanc Tradition Automatic Date", "image": "Pictures/MontBlanc/m4.png", "price":[""], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["1 Year"] , "feature4": ["No"] },
    { "id": "watch17", "name": "Nardin FreakX2305", "image": "Pictures/nardin/u1.png", "price":["33000$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years Official Store"] , "feature4": ["40000 Units"] },
    { "id": "watch18", "name": "Nardin Diver X", "image": "Pictures/nardin/u3.png", "price":["23000$"], "feature1": ["No"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 Years Official Store"] , "feature4": ["No"] },
    { "id": "watch19", "name": "Omega Globmaster", "image": "Pictures/Omega/o1.png", "price":["69000"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["5 Years International"] , "feature4": ["No"] },
    { "id": "watch20", "name": "Omega TwoCounter", "image": "Pictures/Omega/o9.jpg", "price":["108000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["5 Years International"] , "feature4": ["100 Units"] },
    { "id": "watch21", "name": "Piguet Royale Oak Offshore", "image": "Pictures/piguet/a3.jpg", "price":["36000$"], "feature1": ["Yes"] , "feature2": ["Mineral Crystal"] , "feature3": ["2 - 5 Years"] , "feature4": ["No"] },
    { "id": "watch22", "name": "Piguet Flying Tourbillon", "image": "Pictures/piguet/a4.png", "price":["72000$"], "feature1": ["No"] , "feature2": ["Sapphire Crystal"] , "feature3": ["2 - 5 Years"] , "feature4": ["No"]  },
    { "id": "watch23", "name": "Rolex Datejust", "image": "Pictures/rolex/p1.PNG", "price":["89000$"], "feature1": ["No"] , "feature2": ["Sapphire Crystal"], "feature3": ["5 Years International"] , "feature4": ["No"] },
    { "id": "watch24", "name": "Rolex Submariner", "image": "Pictures/rolex/p2.PNG", "price":["134000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["5 Years International"] , "feature4": ["50000 Units"] },
    { "id": "watch25", "name": "Rolex GMT-Master II", "image": "Pictures/rolex/p3.PNG", "price":["122000$"], "feature1": ["Yes"] , "feature2": ["Sapphire Crystal"] , "feature3": ["5 Years International"] , "feature4": ["7777 Units"] } 

  ];
  
  
