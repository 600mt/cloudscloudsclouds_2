//nascondere about 

function hideAbout(){
  let aboutDiv = document.getElementById('about');
  if (aboutDiv.style.display == 'none'){
    aboutDiv.style.display = 'block';
  }else{
    aboutDiv.style.display = 'none';
  }
}

document.getElementById('abutton').onclick = hideAbout;
document.getElementById('close').onclick = hideAbout;

/// array of elements and properties
let array = [ 
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2523-ok-jt20160411/medium-0881161cdfa6963c578146f4618c062d658119c8.jpg', time: 'afternoon', position: '2', weather: 'broken clouds', title:'Anglers on a Small Wooden Bridge', author:'Maerten Fransz. van der Hulst' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-61-jt20180924/medium-f0bf45366a2620c4114323e9a13b47f4f0579d65.jpg', time: 'afternoon', position: '2', weather: 'broken clouds', title:'seascape', author:'Monogrammist D.W.' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2505-ok-jt20161010/medium-9825265296d11ba876ecd348484fd155e67a9fe3.jpg', time: 'afternoon', position: '3', weather: 'broken clouds', title:'Flat Landscape with a Broad River', author:'Philips Koninck' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-58-1/medium-721a50976412911e7fb8da1c8307781dde6e0116.jpg', time: 'afternoon', position: '4', weather: 'broken clouds', title:'landscape', author:'Adriaen van Ostade' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1399-ok-2/medium-4fa4532c450de6520919cad1a548b2701451b197.jpg', time: 'afternoon', position: '4', weather: 'broken clouds', title:'Panorama with Falconers', author:'Jan van Kessel' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1531-ok-jt20180725/medium-ebd335b3f8a81d9a9fcc4fcf12e298168a62224c.jpg', time: 'afternoon', position: '4', weather: 'broken clouds', title:'Beach with Fisher Folk', author:'Klaes Molenaer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-17-jt20190625/medium-9dfc68c69cbc755f1a16fe26d1a59b5d282b63b1.jpg', time: 'afternoon', position: '5', weather: 'broken clouds', title:'Dune landscape', author:'Cornelis Gerritsz. Decker' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1999-ok-jt20190807/medium-122b0d5101e7a784ae2fbf08468134fb3f8baae4.jpg', time: 'afternoon', position: '5', weather: 'broken clouds', title:'Soldiers Plundering a Village', author:'Philips Wouwerman' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-32-jt20180716/medium-ff19337949b8e8707d8209fb3a6efaf45e415950.jpg', time: 'day', position: '2', weather: 'broken clouds', title:'Sailing Boats on a Lake', author:'jan van goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1675-ok-2/medium-b85070ba1fa7b98d22e2fde2313a935fe817e3d6.jpg', time: 'day', position: '2', weather: 'broken clouds', title:'An Estuary in Stormy Weather', author:'Jan Porcellis' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-1-1/medium-427633e4787ca7558443096037bb0ab5fcab23a7.jpg', time: 'day', position: '2', weather: 'broken clouds', title:'Ships in a Squall', author:'Abraham van Beijeren' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-84-jt20170814/medium-1b4f82cb8f7b650c14da0e7bf3c91dcf4fdbc070.jpg', time: 'day', position: '2', weather: 'broken clouds', title:'A Calm Sea', author:'Hendrick Jacobsz. Dubbels' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-73-2/medium-3c7c777460af9f54b5e5ac9dbb5fa031f78829a7.jpg', time: 'day', position: '2', weather: 'broken clouds', title:'River Scene near Deventer', author:'Salomon van Ruysdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookst-5/medium-4ddb9a7bb78e5117d55ac37a5bf4683070b4ff49.jpg', time: 'day', position: '2', weather: 'broken clouds', title:'Calm sea with sailing ships', author:'an van de Cappelle' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2496-ok-2/medium-251474ae7ebec2a5c203ec2e9c11701f1e98e947.jpg', time: 'day', position: '3', weather: 'broken clouds', title:'View over a Flat Landscape', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1049-ok-jt20190802/medium-b6142945f6d4398db7ce6f54f3801d08405a722f.jpg', time: 'day', position: '3', weather: 'broken clouds', title:'River Scene with Dordrecht in the Distance', author:'Abraham van Beijeren' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2522-ok-jt20181029/medium-3c4f3f1285b47b7194652ea5408ce69a713a564f.jpg', time: 'afternoon', position: '2', weather: 'broken clouds', title:'Winter Landscape with Skaters', author:'Jacob Isaacksz. van Ruisdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1745-ok-3/medium-3e964359fb5b82b2b9c59aa8278e05ec2a5606ac.jpg', time: 'afternoon', position: '4', weather: 'broken clouds', title:'Winter Landscape', author:'Jacob Isaacksz. van Ruisdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomk1964-mk-jt20161024/medium-06627e7ac8b4ac71c8ac0d990b628e068b31e6e6.jpg', time: 'day', position: '4', weather: 'clear sky', title:'Landscape with windmill near Schiedam', author:'Johannes Hendrik Weissenbruch' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1686/medium-bcdcf76c2661df8be4a02323f0995e1d70e07800.jpg', time: 'sunset', position: '5', weather: 'clear sky', title:'Mountainous evening landscape', author:'Adam Pijnacker' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2134-ok-jt20180726/medium-3a9ce30a2d848dd4fd4b585a4c2127ae18a7652a.jpg', time: 'sunset', position: '3', weather: 'clear sky', title:'Flat Landscape', author:'Andreas Schelfhout' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1955-ok-jt20181031/medium-aae2f4d8fd1917065c82cadc60b76b29c22db852.jpg', time: 'afternoon', position: '2', weather: 'few clouds', title:'Landscape with Channel', author:'Salomon Leonardus Verveer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1761-ok-jt20180801/medium-4e6f78267c38651e1a5b56502dce105d8e71ce25.jpg', time: 'afternoon', position: '2', weather: 'few clouds', title:'River Scene with the Pellekussen-Poort near Utrecht', author:'Salomon van Ruysdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1407-ok-jt20181031/medium-90b5a8142b9acd9492cb7db9417911eb87721c4b.jpg', time: 'afternoon', position: '2', weather: 'few clouds', title:'Landscape with Cows', author:'Jan Kobell (II)' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2219-ok-jt20190320/medium-a07b71ffdb8efa90ebcf8b63de8b6e173a4c974a.jpg', time: 'afternoon', position: '2', weather: 'few clouds', title:'Landscape with Farmhouse', author:'Pieter Gerardus van Os' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1955-ok-jt20181031/medium-aae2f4d8fd1917065c82cadc60b76b29c22db852.jpg', time: 'afternoon', position: '2', weather: 'few clouds', title:'Landscape with Channel', author:'Salomon Leonardus Verveer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2168-ok-jt20190704/medium-f16f70e072ecd827578023f780841cf38e4cdc1d.jpg', time: 'afternoon', position: '5', weather: 'few clouds', title:'The Fisherman', author:'Arent Arentsz.' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2215-ok-jt20181024/medium-cbe5eb3ec00c65558f91c0db14265b30c48ba961.jpg', time: 'afternoon', position: '5', weather: 'few clouds', title:'Landscape with a Castle and Soldiers Carrying Someone', author:'Anoniem' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1818-ok/medium-22a4a56408fb393b2f55f507d6dff8a2b04d6963.jpg', time: 'afternoon', position: '7', weather: 'few clouds', title:'View of the Great Market in Rotterdam', author:'Hendrick Martensz. Sorgh' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2623-ok-2/medium-b4e218c39b2fc0594ea9583eceb83770d5803a15.jpg', time: 'day', position: '1', weather: 'few clouds', title:'river scene ', author:'Salomon van Ruysdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-81-jt20180716/medium-97e972d707b15bf9bd96806014a6d5cb718b2d2b.jpg', time: 'day', position: '1', weather: 'few clouds', title:'coastal view', author:'Willem van de Velde' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2534-ok/medium-1db85c04a7f666abe9b91224efe26374302bb425.jpg', time: 'day', position: '1', weather: 'few clouds', title:'Calm sea with fishing-boats near the coast', author:'Willem van de Velde' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook3288-ok-jt20180724/medium-f9bb03226e8da7b6d2f19772f6e7ef00c1623798.jpg', time: 'day', position: '2', weather: 'few clouds', title:'Ships at Sea, Left a Flute, Right an Armed Merchant', author:'Jacob Adriaensz. Bellevois' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1018-ok-jt20181024/medium-1bf5a56b25006f0c7949ef30882ee7ddea0c2ae4.jpg', time: 'day', position: '2', weather: 'few clouds', title:'the salute', author:'Ludolf Bakhuizen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2888-ok-jt20180719/medium-18bb19633385777a91fed7635e9161ec28eba544.jpg', time: 'day', position: '2', weather: 'few clouds', title:'Mountainous Landscape', author:'Jacob van Geel' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2212-ok-jt20190320/medium-e070b2f16f439fe3a9638ac99c46c50f43352777.jpg', time: 'day', position: '2', weather: 'few clouds', title:'Landscape with Cottage and Mill', author:'Pieter Barbiers (II)' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1644-ok-jt20181024/medium-6eee42ab21e3de8e236468ca2220d11de7419300.jpg', time: 'day', position: '3', weather: 'few clouds', title:'Landscape in Guelders', author:'Georgius Jacobus Johannes van Os' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1413-ok-jt20180726/medium-f64c6b9b14663240d3ee7bbf9c82b5a4b6035ebc.jpg', time: 'day', position: '3', weather: 'few clouds', title:'Landscape in Guelders', author:'Barend Cornelis Koekkoek' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmvs-278-a-pk-1/medium-5895f53da8b509f5dac762b9cd78fe477f10c343.jpg', time: 'day', position: '4', weather: 'few clouds', title:'Dune Landscape with a Herdsman and Sheep', author:'Andreas Schelfhout' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2525-ok-1/medium-8fc01faf8d4c88332cee961b37684e737fd9b8d9.jpg', time: 'day', position: '6', weather: 'few clouds', title:'River Valley with a Group of Houses', author:'Hercules Segers' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkfdn-1-pk/medium-ed574523a66b26cbf18851cf37fdcfc2310e8a9c.jpg', time: 'day', position: '7', weather: 'few clouds', title:'Panoramic Mountain Landscape (the Chartreuse near Grenoble?)', author:'Frederik de Moucheron' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1583-ok-jt20190801/medium-0be0c4bef52d65edfa8caeafc60f487a3389204c.jpg', time: 'sunset', position: '2', weather: 'few clouds', title:'A Village at Moonlight', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1245-ok-jt20180724/medium-36a042f906129b1c13af207a87e0d42791d7ee96.jpg', time: 'afternoon', position: '2', weather: 'overcast clouds', title:'Winterlandscape near Dordrecht', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1519-ok-jt20181101/medium-e254e5d870f28dfec36559213e3b30a256148172.jpg', time: 'afternoon', position: '2', weather: 'overcast clouds', title:'River Landscape', author:'Hendrik de Meijer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2497-ok-jt20191021/medium-31ac5a5797d220bbaa3702431737ad2dbdcd59aa.jpg', time: 'afternoon', position: '2', weather: 'overcast clouds', title:'River Scene', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2491-ok-jt20191018/medium-8a9e5f1167cb75d49b5d7261c17ea459e875bbc0.jpg', time: 'afternoon', position: '3', weather: 'overcast clouds', title:'The Milkmaid Near the River Bank of the Oude Maas', author:'Aelbert Cuyp' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2533-ok-jt20151214/medium-e0e06ad0f4a5de5f8d6c93de36282ed30784d1e6.jpg', time: 'afternoon', position: '3', weather: 'overcast clouds', title:'View of the North Sea from the Dunes near Zandvoort', author:'Willem van de Velde (II)' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1541-ok-jt20181024/medium-8b2c5903d0cc1bcbc67036e0e5d9dd89363f8770.jpg', time: 'afternoon', position: '4', weather: 'overcast clouds', title:'Winter Landscape with Leafless Trees', author:'Anoniem' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1039-ok-jt20181029/medium-0fb0e2030e3015710980b6d1c19d8d48c056453b.jpg', time: 'day', position: '2', weather: 'overcast clouds', title:'Estuary with Ships', author:'Jacob Adriaensz. Bellevois' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmb-475-pk/medium-ac5b80170a94e800bd4839e6e1477d9d74177776.jpg', time: 'day', position: '4', weather: 'overcast clouds', title:'Winter Landscape with People Harvesting Wood', author:'Andreas Schelfhout' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2888-ok-jt20180719/medium-18bb19633385777a91fed7635e9161ec28eba544.jpg', time: 'day', position: '1', weather: 'overcast clouds', title:'Mountainous Landscape', author:'jacob van geel' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmb-1304-pk/medium-57f448ae3c2b41e38a125596ed8c64e4196ab002.jpg', time: 'day', position: '4', weather: 'overcast clouds', title:'Winter Landscape with a Farm and a Heystack near a Frozen Ditch', author:'Jan Hulswit' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkpak-1213-pk/medium-0584f19a7cd28148616e3ae317d1f6bb70012bc9.jpg', time: 'day', position: '4', weather: 'overcast clouds', title:'Polder Landscape with Cattle and a Man in a Boat on a Canal', author:'Anthonie Andriessen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2482-ok/medium-d94d7898f0711c77515da2e70419012c9b6a22b2.jpg', time: 'day', position: '4', weather: 'overcast clouds', title:'A scene on the Ice', author:'Hendrick Avercamp' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2309-ok-jt20180801/medium-673a5b8e98b564dead3914076a3c76f2dc19040b.jpg', time: 'day', position: '4', weather: 'overcast clouds', title:'A Frozen River with Skaters', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomkst-206-27-jt20190314/medium-700ecb8a6469abdf0fd55506e215a429a7419059.jpg', time: 'day', position: '5', weather: 'overcast clouds', title:'Landscape with Cows and Mill on the Horizon', author:'Anton Mauve' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1012-ok/medium-7f190aeac2221748304ad688629c099f9499c6c1.jpg', time: 'day', position: '5', weather: 'overcast clouds', title:'The Summer', author:'Arent Arentsz.' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1250-ok-jt20191021/medium-86c2733040ffb317abe533d095c4986f2f7a8ce3.jpg', time: 'afternoon', position: '1', weather: 'scattered clouds', title:'A River Bank with a Mill and a Ruin of a Castle', author:'jan van goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook3198-ok-jt20191022/medium-2abcf777f088aa53ce8ba3e2a4a7ed3afdd74c55.jpg', time: 'afternoon', position: '2', weather: 'scattered clouds', title:'Landscape with a River Bank', author:'jan van goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2489-ok-jt20181101/medium-c0715476280acfea3c48a66867ef93ac75e919ae.jpg', time: 'afternoon', position: '2', weather: 'scattered clouds', title:'Restless River with Sailing Boats', author:'Jan van de Cappelle' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-82-jt20180716/medium-e3d03c590212530c96b370f5f9bdaf495ac9e850.jpg', time: 'afternoon', position: '2', weather: 'scattered clouds', title:'Gathering squall at sea', author:'Willem van de Velde (II)' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1116-ok-jt20190416/medium-6dd0e96dfb4b82b279b0efa95732c0eefc1f90ca.jpg', time: 'afternoon', position: '2', weather: 'scattered clouds', title:'Seascape', author:'Anoniem' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomk1892-ok/medium-1d79d1ce5aa50118598c25c745c505a8fe7902f8.jpg', time: 'afternoon', position: '2', weather: 'scattered clouds', title:'Vessels in a harbour', author:'Willem van de Velde (II)' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1946-ok-jt20181031/medium-273653ecf3c3f79214d19ce5e6f0a61ae15b8de4.jpg', time: 'afternoon', position: '3', weather: 'scattered clouds', title:'Cattle in a Meadow', author:'Adriaen van de Velde' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-56/medium-14fe6711bc657bfad3ccc716b952545e58c6a22d.jpg', time: 'afternoon', position: '3', weather: 'scattered clouds', title:'Winter Landscape with Ice Skaters', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1749-ok-jt20180731/medium-5052aadf33385b36d05bdb686bcffdc970d4c055.jpg', time: 'afternoon', position: '3', weather: 'scattered clouds', title:'View near Dordrecht', author:'Salomon van Ruysdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1620-ok-jt20190320/medium-481cfc7c6a5969a5aaee9ab955dc9df437636951.jpg', time: 'afternoon', position: '4', weather: 'scattered clouds', title:'Flat Landscape with Trees', author:'Balthasar Paul Ommeganck' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1620-ok-jt20190320/medium-481cfc7c6a5969a5aaee9ab955dc9df437636951.jpg', time: 'afternoon', position: '4', weather: 'scattered clouds', title:'Flat Landscape with Trees', author:'Balthasar Paul Ommeganck' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1494-ok-3/medium-a8a954a7a5de8919017d9bbc54e933db342fa481.jpg', time: 'afternoon', position: '5', weather: 'scattered clouds', title:'Cavalry Battle Between Dutch and Spanish Troops', author:'Jan Martens de Jonge' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomk1279-mk-jt20190319/medium-9b8121f2aee0a90f94843c1451d4e90d2d7865ac.jpg', time: 'afternoon', position: '5', weather: 'scattered clouds', title:'Landscape', author:'Louwrens Hanedoes' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1419-ok-1/medium-bc99f680f162eb569cda4dee7d0668cdda25899c.jpg', time: 'afternoon', position: '5', weather: 'scattered clouds', title:'An Extensive Landscape, with a River', author:'Philips Koninck' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1307-ok/medium-91b3b099a06b3671a44808b5dcdd7a75fb1fbc8f.jpg', time: 'afternoon', position: '5', weather: 'scattered clouds', title:'Sunny Landscape with a Cottage', author:'Meindert Hobbema' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1021-ok-jt20180924/medium-252176fa25a5123fe1aef79a009d7c193dcdd20c.jpg', time: 'afternoon', position: '6', weather: 'scattered clouds', title:'Ruin on a Mountain', author:'Hendrikus van de Sande Bakhuyzen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1252-ok-jt20180724/medium-cf66b5c57d977d7c4bcb46f186baebfe39f52e55.jpg', time: 'day', position: '2', weather: 'scattered clouds', title:'A River Bank', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1249-ok-jt20191022/medium-51220397d998d1ae4ee25d73937c2de80c93d8df.jpg', time: 'day', position: '2', weather: 'scattered clouds', title:'The Haarlemmermeer in a Storm', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1923-ok/medium-275d62df2a41e9b884c59f541fbbb79836e64023.jpg', time: 'day', position: '2', weather: 'scattered clouds', title:'Calm Water', author:'Simon de Vlieger' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1744-ok-4/medium-2e7425a587956669e33313e2c8d96f7d61991397.jpg', time: 'day', position: '3', weather: 'scattered clouds', title:'The Damrak in Amsterdam', author:'Jacob Isaacksz. van Ruisdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-31/medium-2d4112b99eea7c88223610d44127b762ffccf31e.jpg', time: 'day', position: '3', weather: 'scattered clouds', title:'A Scene on the Ice', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1743-ok-jt20190801/medium-a19d286c18640fdc5e957a96c3ea1dcebcf099de.jpg', time: 'day', position: '3', weather: 'scattered clouds', title:'Sandy Road between Trees', author:'Jacob Isaacksz. van Ruisdael' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2356-ok/medium-d6787703147a27c47fd41f554517642021f552cc.jpg', time: 'day', position: '3', weather: 'scattered clouds', title:'Landscape near Haarlem', author:'Andreas Schelfhout' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkjvdc-1-pk/medium-e33308b5923ea0855b3eebb07e0eaa396f03cfa9.jpg', time: 'day', position: '3', weather: 'scattered clouds', title:'River Landscape with Saling Ships and Fisher Boats', author:'Jan van de Cappelle' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-50-jt20180716/medium-bf106437868adc442fbf3016cb8b4b4148ed8f7d.jpg', time: 'day', position: '3', weather: 'scattered clouds', title:'Ships in a storm', author:'Hendrick Jacobsz. Dubbels' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2537-ok-jt20180801/medium-639a535adff90cabde87d1f3b0b27dea2d877dde.jpg', time: 'day', position: '4', weather: 'scattered clouds', title:'Dune landscape with horse and wagon and horsmen', author:'Philips Wouwerman' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmvs-126-pk/medium-8cec9826eb7b2ed846524c673d3809e5fa7a4340.jpg', time: 'day', position: '4', weather: 'scattered clouds', title:'Winter Landscape with Skaters on a Frozen Canal near a Windmill', author:'Wybrand Hendriks' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmb-1285-pk/medium-41cda0eee0e4addc627f7f1c875f93e51a028097.jpg', time: 'day', position: '4', weather: 'scattered clouds', title:'Forest Landscape near the Village Eext (Drenthe Province)', author:'Jan Hulswit' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkbdh-12207-pk/medium-3a9786c26334b57829810918ae77dcb32ae03c17.jpg', time: 'day', position: '4', weather: 'scattered clouds', title:'View of the Rhine', author:'Jan van Aken' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomkvdv-67-jt20180716/medium-43b86d22e8087695893696d646a3c0114105f6e5.jpg', time: 'day', position: '4', weather: 'scattered clouds', title:'Landscape with trees and water', author:'Willem Roelofs' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1916-ok-jt20181101/medium-e0de7068179030d461177d6cddde989f4b6233c1.jpg', time: 'day', position: '4', weather: 'scattered clouds', title:'Rock Landscape', author:'Jacob de Villeers' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomk1074-mk-jt20190904/medium-877108f8bdb620219e11ab2a7e29b0a242d783aa.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'Landscape', author:'Jan Willem van Borselen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmb-1168-pk/medium-eea8fb99deead29a15f856b44cb10c65db8ff440.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'Dune Landscape West of Haarlem', author:'Hermanus van Brussel' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomk1565-mk/medium-844e2acfed06d65cfd55a4b435daaf9f378328dc.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'landscape ', author:'Henricus Joannes Melis' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1098-ok/medium-b5a989873c924f64599df54a166f5192d58588db.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'A village channel', author:'Anoniem' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkbdh-5430-pk/medium-2289dd692c78b832c4b8a442a8f8e46becaa9e92.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'The Large Village Fair', author:'Cornelis Dusart' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2211-ok-jt20181031/medium-7c4f4fadef2bad1eae1f190d723111b903702ddb.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'Chickens and Peacock in a Landscape', author:'Albertus Verhoesen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotomk1343-mk-jt20181023/medium-b922c7d940bdd5a38ca824fb9ea80ec44334b6ff.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'landscape', author:'Johannes Hilverdink' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2383-ok-jt20130603/medium-f2a653cbea6e52826af2cfd269ef9932728e2b1b.jpg', time: 'day', position: '5', weather: 'scattered clouds', title:'Landscape with tower and circular building', author:'Hercules Segers' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkbdh-16324-pk/medium-caac0317ed61dc8d0d97b0e653e11d57c9e654e7.jpg', time: 'day', position: '6', weather: 'scattered clouds', title:'A Sperm Whale Beached Between Noordwijk and Zandvoort on 4 January 1629', author:'Cornelis van Kittensteyn' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1621-ok-jt20190320/medium-b37cc060356a5491bf1f23dcebd83ac584bb3101.jpg', time: 'day', position: '6', weather: 'scattered clouds', title:'Hilly Landscape', author:'Balthasar Paul Ommeganck' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopkmvs-105-pk/medium-e0962e5bb85e91bae9dc6cc7b381e0be305c633b.jpg', time: 'day', position: '6', weather: 'scattered clouds', title:'Hilly landscape with View of the House of Baron de Plotho d Ingelmunster', author:'Josua de Grave' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1192-ok/medium-c70261d75b71624b1d27fe8ddd4b72899be85df3.jpg', time: 'afternoon', position: '7', weather: 'scattered clouds', title:'Boaz and Ruth', author:'Gerbrand van den Eeckhout' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-55-jt20180924/medium-d5994a0a3ac02353dbbd725018c48142991c94a1.jpg', time: 'sunset', position: '2', weather: 'scattered clouds', title:'Hilly landscape at sunset', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1584-ok-jt20180801/medium-73d08ca992f3ed3663781e737f69af9495c4a9c9.jpg', time: 'sunset', position: '4', weather: 'scattered clouds', title:'Landscape at Evening', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2360-ok-jt20181024/medium-6c4762ac87f42c008c7e8ab1792dba8ce325b38f.jpg', time: 'sunset', position: '4', weather: 'scattered clouds', title:'Evening Landscape with Ruin', author:'Anoniem' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2293-ok-jt20180726/medium-6843e270b70067c1ba16734200cb2a82e37e546b.jpg', time: 'sunset', position: '4', weather: 'scattered clouds', title:'Mills by Evening', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2781-ok-jt20190703/medium-fdb8d60e90c556d9fc60578ce01fd1bb2a429c34.jpg', time: 'sunset', position: '5', weather: 'scattered clouds', title:'Landscape in Guelders', author:'Wouter Johannes van Troostwijk' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotopk0028-0137/medium-2c147b0077e3ab663838ab894c2411ee4e508227.jpg', time: 'night', position: '3', weather: 'scattered clouds', title:'Moonlit Landscape with a Torrent between Trees', author:'Anthonie Waterloo' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook2510-ok-jt20181029/medium-55a3e2ede44c81a0fdbeb344bf558c2a73d4ad2a.jpg', time: 'night', position: '4', weather: 'scattered clouds', title:'Landscape in Moonlight', author:'Aert van der Neer' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotook1248-ok-jt20191018/medium-dcfaaa8cd7f37e1494c29d453f6d6f742620fcea.jpg', time: 'sunset', position: '3', weather: 'scattered clouds', title:'A River Scene with Fishermen', author:'Jan van Goyen' },
  { url: 'https://storage.boijmans.nl/collection/tmsfotookvdv-10-jt20180716/medium-eb9900390649396a02a806e377a1d8b257eddbe9.jpg', time: 'afternoon', position: '3', weather: 'scattered clouds', title:'Sunset near Dordrecht', author:'Aelbert Cuyp' },
]

// global variables
let hour = 0;
let imgPlaceholder = document.getElementById('image-placeholder');
let weather = document.getElementById('weather');
let city = document.getElementById('city');
let cloudStatus = "";
let tempArray = [];
let tempCounter = 0;
var timeDisplay = document.getElementById("time");
let author = document.getElementById('author');
let title = document.getElementById('title');
let currentTime = hour;


//show author
function showAuthor() {
  document.getElementById("author").innerHTML = "";
}



window.addEventListener('load', (event) => {
  //check api for weather data
  checkWeatherData();
  setInterval(refreshTime, 5000);
});


// check current time (every 5 seconds)


function refreshTime() {
  const d = new Date();
  hour = d.getHours();
  minutes = d.getMinutes();
  seconds = d.getSeconds();
  document.getElementById("time").innerHTML = "" + hour + ":" + minutes;

  if (currentTime !== hour) {
    checkTimer(); // call function check Timer
  }
  currentTime = hour;
}

//API call to openweathermap.org
// fetches the city name and the current weather data
function checkWeatherData() {

  fetch('https://api.openweathermap.org/data/2.5/weather?id=2747891&appid=50be98d56f5d6df421f998f3056ad660')
    .then(response => {
      return response.json();
    })
    .then(response => {
      weather.innerHTML = "" + response.weather[0].description;
      city.innerHTML = "" + response.name;
      cloudStatus = response.weather[0].description;
      console.log(response);
    })
}

//loop through all objects in the array and check if their time and weather data fit the current time and the api call
// the temparray is a variable that saves all the elemtns that fit into the categories. 
function checkTimer() { // loop through the array and compare attributes

  for (let i = 0; i < array.length; i++) {

    if ((hour === 13 || hour === 14 || hour === 15 || hour === 16 || hour === 17) && array[i].time === "afternoon" && cloudStatus === array[i].weather) {
      tempArray[tempCounter] = array[i];
      tempCounter++; //The variable tempCounter counts up every time a fitting element is found
    }
    if ((hour === 18 || hour === 19 || hour === 20 || hour === 21) && array[i].time === "sunset" && cloudStatus === array[i].weather) {
      tempArray[tempCounter] = array[i];
      tempCounter++;
    }
    if ((hour === 7 || hour === 8 || hour === 9 || hour === 10 || hour === 11 || hour === 12) && array[i].time === "day" && cloudStatus === array[i].weather) {
      tempArray[tempCounter] = array[i];
      tempCounter++;
    }
    if ((hour === 22 || hour === 23 || hour === 24 || hour === 1 || hour === 2 || hour === 3 || hour === 4 || hour === 5 || hour === 6) && array[i].time === "night" && cloudStatus === array[i].weather) {
      tempArray[tempCounter] = array[i];
      tempCounter++;
    }
  }
  console.log(tempArray)
  // let randomArrayPosition = rN(0, tempArray.length - 1); // get a random element of the array of images that fit the categories
  // imgPlaceholder.style.backgroundImage = 'url(' + tempArray[randomArrayPosition].url + ')'; // change the background image

  createImages(tempArray);
  tempArray = [];

}


function createImages(tempArray) {

  for (let i = 0; i < tempArray.length; i++) {
    let x = document.createElement("IMG");
    x.src = tempArray[i].url;
    x.classList.add("img-landscape");
    imgPlaceholder.appendChild(x);
  }




  // x.url = tempArray[]
}


// function that returns a random number inbetween 2 numbers (min / max)
function rN(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



