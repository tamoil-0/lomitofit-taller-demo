export const products = [
  { id:'LF-001', name:'Hoodie Terracota', type:'Sudaderas', tag:'Más vendido', price:69, image:'/assets/poodle_sudadera.jpg', sizes:['XS','S','M'], color:'Terracota', description:'Sudadera flexible para paseos con personalidad.' },
  { id:'LF-002', name:'Raincoat Bosque', type:'Impermeables', tag:'Para lluvia', price:89, image:'/assets/corgi_impermeable.jpg', sizes:['S','M','L'], color:'Verde salvia', description:'Capa ligera para días húmedos y aventuras.' },
  { id:'LF-003', name:'Suéter Nube', type:'Abrigos', tag:'Edición cozy', price:79, image:'/assets/golden_sueter.jpg', sizes:['M','L','XL'], color:'Crema', description:'Tejido suave para días frescos.' },
  { id:'LF-004', name:'Combo Paseo', type:'Accesorios', tag:'Kit ideal', price:49, image:'/assets/hero_16_9.jpg', sizes:['XS','S','M','L','XL'], color:'Mixto', description:'Accesorio de paseo para complementar el outfit.' },
];
export const categories=['Todos','Sudaderas','Impermeables','Abrigos','Accesorios'];
export function formatPrice(v){return `S/ ${v.toFixed(2)}`;}
export function filterProducts(list,category,query){
  const q=query.trim().toLowerCase();
  return list.filter(p=>(category==='Todos'||p.type===category)&&`${p.name} ${p.type}`.toLowerCase().includes(q));
}
export function sizeFromChest(cm){
  if(!Number.isFinite(cm)||cm<20||cm>120)return null;
  if(cm<=34)return 'XS'; if(cm<=44)return 'S'; if(cm<=58)return 'M';if(cm<=74)return 'L';return 'XL';
}
export const SIZE_INFO=[{size:'XS',chest:'20–34 cm'},{size:'S',chest:'35–44 cm'},{size:'M',chest:'45–58 cm'},{size:'L',chest:'59–74 cm'},{size:'XL',chest:'75–120 cm'}];
