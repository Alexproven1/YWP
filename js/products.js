const products = [
  {id:'day-adult',name:'Adult Day Ticket',cat:'tickets',price:21.50,img:'https://www.yorkshirewildlifepark.com/media/s0nf1svi/better-vista.jpg',badge:'Tickets',bc:'',desc:'Full day park access for ages 16+. Includes all animals, exhibits, play areas, and ranger talks. Free parking included.',meta:['Ages 16+','Full day','Free parking'],aud:['families','couples','groups'],inc:'Park admission',link:'booking.html',pl:'From'},
  {id:'day-child',name:'Child Day Ticket',cat:'tickets',price:17.50,img:'https://www.yorkshirewildlifepark.com/media/px0isaks/oasis-adventure-play-zip-wire.jpg',badge:'Tickets',bc:'',desc:'Full day park access for ages 3–15. Must be accompanied by an adult. Includes play areas and all exhibits.',meta:['Ages 3–15','Full day','Free parking'],aud:['families','kids'],inc:'Park admission',link:'booking.html',pl:'From'},
  {id:'day-conc',name:'Concession Day Ticket',cat:'tickets',price:20.50,img:'https://www.yorkshirewildlifepark.com/media/s0nf1svi/better-vista.jpg',badge:'Tickets',bc:'',desc:'Full day park access for seniors (65+) and students. NUS/TOTUM card required for students.',meta:['Senior 65+ / Student','Full day'],aud:['couples','groups'],inc:'Park admission',link:'booking.html',pl:'From'},
  {id:'day-u3',name:'Under 3s Day Ticket',cat:'tickets',price:0,img:'https://www.yorkshirewildlifepark.com/media/px0isaks/oasis-adventure-play-zip-wire.jpg',badge:'Tickets',bc:'',desc:'Free entry for children under 3 years old. No ticket purchase required — just turn up!',meta:['Under 3','Free entry'],aud:['families','kids'],inc:'Park admission',link:'booking.html',pl:''},
  {id:'acc-adult',name:'Accessible Adult Ticket',cat:'tickets',price:13.50,img:'https://www.yorkshirewildlifepark.com/media/s0nf1svi/better-vista.jpg',badge:'Tickets',bc:'',desc:'Discounted admission for visitors with Blue Badge, DLA, PIP or similar. ID required at entry.',meta:['Ages 16+','ID required'],aud:['accessible','families','couples'],inc:'Park admission',link:'booking.html',pl:'From'},
  {id:'acc-child',name:'Accessible Child Ticket',cat:'tickets',price:9.50,img:'https://www.yorkshirewildlifepark.com/media/px0isaks/oasis-adventure-play-zip-wire.jpg',badge:'Tickets',bc:'',desc:'Discounted admission for children 3–15 with accessible needs. ID required.',meta:['Ages 3–15','ID required'],aud:['accessible','families','kids'],inc:'Park admission',link:'booking.html',pl:'From'},
  {id:'carer',name:'Official Carer Ticket',cat:'tickets',price:8.00,img:'https://www.yorkshirewildlifepark.com/media/s0nf1svi/better-vista.jpg',badge:'Tickets',bc:'',desc:'One carer ticket per accessible ticket holder. Providing care for a guest with accessible needs.',meta:['1 per accessible guest'],aud:['accessible'],inc:'Park admission',link:'booking.html',pl:''},
  {id:'mem-std',name:'Standard Annual Membership',cat:'memberships',price:86.99,img:'https://www.yorkshirewildlifepark.com/media/ey4ndnwn/dsc04954-2.jpg',badge:'Membership',bc:'membership',desc:'Visit unlimited times for a full year. Includes free parking, 10% shop discount, and member events. Pays for itself in just 4 visits.',meta:['12 months','Unlimited visits','10% shop discount'],aud:['families','couples'],inc:'Unlimited park admission',link:'#',pl:'From'},
  {id:'mem-gold',name:'Gold Annual Membership',cat:'memberships',price:120.00,img:'https://www.yorkshirewildlifepark.com/media/ey4ndnwn/dsc04954-2.jpg',badge:'Membership',bc:'membership',desc:'Everything in Standard plus priority booking, 15% shop discount, exclusive previews, and free guest passes.',meta:['12 months','Priority booking','15% discount'],aud:['families','couples'],inc:'Unlimited park admission',link:'#',pl:'From'},
  {id:'exp-polar',name:'Platinum Polar Bear Experience',cat:'experiences',price:450,img:'https://www.yorkshirewildlifepark.com/media/lvnplfl2/2025-project-polar-dr-ywp-20.jpg',badge:'Experience',bc:'experience',desc:'Once-in-a-lifetime. Meet the largest collection of polar bears in England with a dedicated keeper. Behind-the-scenes access included.',meta:['90 min','Ages 16+','2 people','Platinum'],aud:['couples'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-tiger',name:'Platinum Tiger Experience',cat:'experiences',price:395,img:'https://www.yorkshirewildlifepark.com/media/mmroe2hb/2025-land-of-the-tiger-altai-dr-ywp-78.jpg',badge:'Experience',bc:'experience',desc:'Meet our magnificent Amur tigers with a dedicated keeper. Learn about conservation efforts up close.',meta:['75 min','Ages 16+','2 people','Platinum'],aud:['couples'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-leopard',name:'Gold Leopard Experience',cat:'experiences',price:195,img:'https://www.yorkshirewildlifepark.com/media/glnn5le3/2025-leopard-heights-dr-ywp-42.jpg',badge:'Experience',bc:'experience',desc:'Experience the thrill of meeting our beautiful Amur leopards in a keeper-led encounter.',meta:['60 min','Ages 12+','2 people','Gold'],aud:['couples','families'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-giraffe',name:'Gold Giraffe Experience',cat:'experiences',price:175,img:'https://www.yorkshirewildlifepark.com/media/tj0fab3y/ywp-images-3207.jpg',badge:'Experience',bc:'experience',desc:'Hand-feed our towering giraffes and learn about their care from an expert keeper. Magical for all ages.',meta:['60 min','Ages 8+','2 people','Gold'],aud:['couples','families','kids'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-rhino',name:'Gold Rhino Experience',cat:'experiences',price:185,img:'https://www.yorkshirewildlifepark.com/media/jiuflm2d/2025-rhino-dr-ywp-8.jpg',badge:'Experience',bc:'experience',desc:'Meet our black rhinos up close and discover their critical role in global conservation.',meta:['60 min','Ages 12+','2 people','Gold'],aud:['couples','families'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-lion',name:'Silver Lion Experience',cat:'experiences',price:125,img:'https://www.yorkshirewildlifepark.com/media/c1kdqbok/2025-lion-rescue-3-dr-ywp-6.jpg',badge:'Experience',bc:'experience',desc:'Meet the Prides of Yorkshire — including famous rescue lions from around the world.',meta:['45 min','Ages 8+','2 people','Silver'],aud:['couples','families','kids'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-rp',name:'Silver Red Panda Experience',cat:'experiences',price:115,img:'https://www.yorkshirewildlifepark.com/media/0nthkz0x/2025-red-panda-dr-ywp-4.jpg',badge:'Experience',bc:'experience',desc:'Get up close to our adorable red pandas in a keeper-led encounter. One of our most popular.',meta:['45 min','Ages 8+','2 people','Silver'],aud:['couples','families','kids'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-cheetah',name:'Silver Cheetah Experience',cat:'experiences',price:135,img:'https://www.yorkshirewildlifepark.com/media/zyxjaz1f/2025-cheetah-territory-dr-ywp-29.jpg',badge:'Experience',bc:'experience',desc:"Learn about the world's fastest land animal from a specialist keeper.",meta:['45 min','Ages 12+','2 people','Silver'],aud:['couples','families'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-lemur',name:'Bronze Lemur Experience',cat:'experiences',price:65,img:'https://www.yorkshirewildlifepark.com/media/sk4m4h0y/img_6288.jpg',badge:'Experience',bc:'experience',desc:'Step inside the lemur enclosure and meet our friendly ring-tailed lemurs. Great for younger visitors.',meta:['30 min','Ages 4+','2 people','Bronze'],aud:['families','kids','couples'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'exp-meerkat',name:'Bronze Meerkat Experience',cat:'experiences',price:55,img:'https://www.yorkshirewildlifepark.com/media/hpdnajg2/2025-land-of-the-tiger-altai-dr-ywp-47.jpg',badge:'Experience',bc:'experience',desc:'Meet our cheeky meerkat mob and help the keepers with feeding. Fun for all the family.',meta:['30 min','Ages 4+','2 people','Bronze'],aud:['families','kids','couples'],inc:'Park admission included',link:'experiences.html',pl:'From'},
  {id:'stay-fam',name:'Family Room — Hex Hotel',cat:'stays',price:535,img:'https://www.yorkshirewildlifepark.com/media/cwupjiua/ywp25clothinghotel-122.jpg',badge:'Stay',bc:'stay',desc:'Comfortable family accommodation at Hex Wildlife Hotel. Sleeps 2 adults + 2 children. B&B included.',meta:['Sleeps 4','B&B included','Park entry included'],aud:['families','kids'],inc:'Park entry per night',link:'short-breaks.html',pl:'From'},
  {id:'stay-prem',name:'Premium Family Room with Balcony',cat:'stays',price:696,img:'https://www.yorkshirewildlifepark.com/media/pyknnd5c/dsc_3728-hex-wildlife.jpg',badge:'Stay',bc:'stay',desc:'Park-side views from your private balcony. Sleeps 5. B&B plus park admission for every night.',meta:['Sleeps 5','Balcony','B&B + park entry'],aud:['families','kids'],inc:'Park entry per night',link:'short-breaks.html',pl:'From'},
  {id:'stay-suite',name:'Suite — Hex Hotel',cat:'stays',price:595,img:'https://www.yorkshirewildlifepark.com/media/tq1fxqad/img_0138.jpg',badge:'Stay',bc:'stay',desc:'Our most luxurious rooms. Perfect for couples or a special occasion. Park admission included.',meta:['Sleeps 2','Premium','Park entry included'],aud:['couples'],inc:'Park entry per night',link:'short-breaks.html',pl:'From'},
  {id:'ev-wl',name:'Wild Live 2026',cat:'events',price:45,img:'https://www.yorkshirewildlifepark.com/media/ktldeo01/wild-live-2026-background.jpg',badge:'Event',bc:'event',desc:'Live music, park access, and camping under the stars. Scouting for Girls, Ocean Colour Scene and more.',meta:['August 2026','Weekend','Music + park'],aud:['families','couples','groups'],inc:'Park admission included',link:'#',pl:'From'},
  {id:'ev-seasonal',name:'Seasonal Events',cat:'events',price:0,img:'https://www.yorkshirewildlifepark.com/media/5u0d3gm0/dsc00694.jpg',badge:'Event',bc:'event',desc:'Easter adventures, Halloween frights, Christmas magic — special seasonal events throughout the year. Included with admission.',meta:['Year-round','Seasonal','Free with entry'],aud:['families','kids'],inc:'Included with admission',link:'#',pl:''},
  {id:'eq-wc',name:'Wheelchair Hire',cat:'equipment',price:0,img:'https://www.yorkshirewildlifepark.com/media/0xfhej5p/ben-harrison-photography-www-benharrisonphotography-co-uk-53.jpg',badge:'Equipment',bc:'equipment',desc:'Free wheelchair hire from Guest Services. Collect when you check in. Subject to availability.',meta:['Free','Guest Services'],aud:['accessible'],inc:null,link:'booking.html',pl:''},
  {id:'eq-push',name:'Single Pushchair Hire',cat:'equipment',price:10,img:'https://www.yorkshirewildlifepark.com/media/px0isaks/oasis-adventure-play-zip-wire.jpg',badge:'Equipment',bc:'equipment',desc:'Perfect for younger guests. Available from 9:45am for the entire day.',meta:['Full day'],aud:['families','kids'],inc:null,link:'booking.html',pl:''},
  {id:'eq-scoot',name:'Mobility Scooter Hire',cat:'equipment',price:20,img:'https://www.yorkshirewildlifepark.com/media/s0nf1svi/better-vista.jpg',badge:'Equipment',bc:'equipment',desc:'Full day hire from 9:45am. £50 refundable deposit required on the day. Book ahead to guarantee.',meta:['Full day','£50 deposit'],aud:['accessible'],inc:null,link:'booking.html',pl:''},
  {id:'fd-refill',name:'Unlimited Refill Cup',cat:'food',price:5,img:'https://www.yorkshirewildlifepark.com/media/0xfhej5p/ben-harrison-photography-www-benharrisonphotography-co-uk-53.jpg',badge:'Food & Drink',bc:'food',desc:'Unlimited soft drink refills all day at any participating park café.',meta:['All day','Any café'],aud:['families','kids','couples','groups'],inc:null,link:'booking.html',pl:''},
  {id:'fd-bk',name:'Breakfast Voucher',cat:'food',price:9.50,img:'https://www.yorkshirewildlifepark.com/media/mgxdiblp/hive-evening-02.jpg',badge:'Food & Drink',bc:'food',desc:'Full breakfast at The Yorkshire Hive restaurant. Valid on your visit date.',meta:['Yorkshire Hive','Morning'],aud:['families','couples'],inc:null,link:'booking.html',pl:''},
  {id:'fd-lunch',name:'Lunch Meal Deal',cat:'food',price:12,img:'https://www.yorkshirewildlifepark.com/media/mgxdiblp/hive-evening-02.jpg',badge:'Food & Drink',bc:'food',desc:'Main, side and a drink at any participating park restaurant.',meta:['Main + side + drink'],aud:['families','couples','groups'],inc:null,link:'booking.html',pl:''},
  {id:'act-play',name:'Uproar Play Centre',cat:'activities',price:6.50,img:'https://www.yorkshirewildlifepark.com/media/px0isaks/oasis-adventure-play-zip-wire.jpg',badge:'Activity',bc:'activity',desc:'Unlimited indoor play session. Slides, ball pits, climbing frames. Perfect for ages 2–12.',meta:['Ages 2–12','Unlimited session'],aud:['families','kids'],inc:null,link:'booking.html',pl:''},
  {id:'act-golf',name:'Adventure Golf',cat:'activities',price:5,img:'https://www.yorkshirewildlifepark.com/media/s0nf1svi/better-vista.jpg',badge:'Activity',bc:'activity',desc:'18-hole safari-themed adventure golf course. Fun for all ages.',meta:['18 holes','All ages'],aud:['families','kids','couples','groups'],inc:null,link:'booking.html',pl:''},
  {id:'ex-photo',name:'Premium Photo Package',cat:'extras',price:15,img:'https://www.yorkshirewildlifepark.com/media/ey4ndnwn/dsc04954-2.jpg',badge:'Extra',bc:'',desc:'All professional photos from the day as high-resolution digital downloads.',meta:['Digital download','Same-day access'],aud:['families','couples'],inc:null,link:'booking.html',pl:''}
];

function getChecked(){
  const boxes=document.querySelectorAll('.filters input[type="checkbox"]:checked');
  const v={cat:[],aud:[],price:[],special:[]};
  const cats=['tickets','experiences','stays','events','memberships','food','equipment','activities','extras'];
  const auds=['families','couples','groups','kids','accessible'];
  const prs=['free','under25','25to100','100to250','over250'];
  boxes.forEach(b=>{
    if(cats.includes(b.value))v.cat.push(b.value);
    else if(auds.includes(b.value))v.aud.push(b.value);
    else if(prs.includes(b.value))v.price.push(b.value);
    else if(b.value==='inc-admission')v.special.push(b.value);
  });
  return v;
}

function matchPrice(p,ranges){
  if(!ranges.length)return true;
  return ranges.some(r=>{
    if(r==='free')return p===0;
    if(r==='under25')return p>0&&p<25;
    if(r==='25to100')return p>=25&&p<=100;
    if(r==='100to250')return p>100&&p<=250;
    if(r==='over250')return p>250;
  });
}

function filterProducts(){
  const q=document.getElementById('searchInput').value.toLowerCase().trim();
  const f=getChecked();
  const sort=document.getElementById('sortSelect').value;
  let res=products.filter(p=>{
    if(q&&!p.name.toLowerCase().includes(q)&&!p.desc.toLowerCase().includes(q)&&!p.cat.includes(q))return false;
    if(f.cat.length&&!f.cat.includes(p.cat))return false;
    if(f.aud.length&&!f.aud.some(a=>p.aud.includes(a)))return false;
    if(!matchPrice(p.price,f.price))return false;
    if(f.special.includes('inc-admission')&&!p.inc)return false;
    return true;
  });
  if(sort==='price-low')res.sort((a,b)=>a.price-b.price);
  else if(sort==='price-high')res.sort((a,b)=>b.price-a.price);
  else if(sort==='name-az')res.sort((a,b)=>a.name.localeCompare(b.name));
  renderGrid(res);
  renderTags(f);
  updateCounts();
}

function renderGrid(items){
  const g=document.getElementById('productGrid');
  document.getElementById('countNum').textContent=items.length;
  if(!items.length){g.innerHTML='<div class="no-results"><h3>No products found</h3><p>Try adjusting your filters or search terms.</p></div>';return;}
  g.innerHTML=items.map(p=>{
    const priceH=p.price===0?'<div class="prod-price">Free</div>':'<div class="prod-price"><span class="pp-from">'+(p.pl||'')+'</span>£'+p.price.toFixed(2)+'</div>';
    const incH=p.inc?'<div class="prod-includes">✓ '+p.inc+'</div>':'';
    const metaH=p.meta.map(m=>'<span>'+m+'</span>').join('');
    return '<div class="prod-card"><div class="prod-img" style="background-image:url(\''+p.img+'\');"><span class="prod-badge '+p.bc+'">'+p.badge+'</span>'+incH+'</div><div class="prod-body"><h3>'+p.name+'</h3><div class="prod-meta">'+metaH+'</div><p class="prod-desc">'+p.desc+'</p><div class="prod-footer">'+priceH+'<a href="'+p.link+'" class="btn btn-primary">Book →</a></div></div></div>';
  }).join('');
}

function renderTags(f){
  const el=document.getElementById('activeTags');
  const all=[...f.cat,...f.aud,...f.price,...f.special];
  el.innerHTML=all.map(t=>'<span class="active-tag" onclick="removeFilter(\''+t+'\')">'+t+' <span class="tag-x">✕</span></span>').join('');
}

function removeFilter(val){
  document.querySelectorAll('.filters input[type="checkbox"]').forEach(cb=>{if(cb.value===val)cb.checked=false;});
  filterProducts();
}

function clearFilters(){
  document.querySelectorAll('.filters input[type="checkbox"]').forEach(cb=>cb.checked=false);
  document.getElementById('searchInput').value='';
  filterProducts();
}

function updateCounts(){
  const cats={};
  products.forEach(p=>{cats[p.cat]=(cats[p.cat]||0)+1;});
  Object.keys(cats).forEach(c=>{const el=document.getElementById('fc-'+c);if(el)el.textContent=cats[c];});
}

filterProducts();
