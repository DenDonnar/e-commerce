const furniture = (name, model, price, year, phone, image, link, description) => ({name, model, price, year, phone, image, link, description})
const furnitures = [
	furniture('Sofa', 'Focus', 380, '2016', '(+48) 110 453 678', 'images/sofa.png', 'https://sketchfab.com/models/05cf520deaa74291b988a89415172bee/embed?autostart=1&amp;camera=0', "Modern modular convertible sofa, transforms into a bed XL size. This product constructed with handwood frame and made with love, this set includes 5 soft pillows."),
	furniture('Table', 'Italiano', 120, '2018', '(+48) 521 213 229', 'images/table.png','https://sketchfab.com/models/cb6f2a6bb4f44ce8a39babe4387024d0/embed?autostart=1&amp;camera=0', "HandMade white dining table, for small intimate spaces, like kitchen. Surface of this table easy to clean-up and more persistent for scratch marks."),
	furniture('Bed', 'Sky', 500, '2016', '(+48) 520 982 225', 'images/bed.png','https://sketchfab.com/models/46efcd8b0116410abd6a56fb6a528812/embed?autostart=1&amp;camera=0', "This modern XXL bed designed for peoples who likes more space. Made with eco materials only red tree, zero glue. Red tree is suitable to modern house.  "),
	furniture('Nightstand', 'Silence', 89, '2016', '(+48) 570 343 555', 'images/nightstand.png','https://sketchfab.com/models/cd8f85e8a5dd4926bac1f47d66ddee8e/embed?autostart=1&amp;camera=0',"Beautiful, budgetary nightstand, good place for your clock, and books. Made of pine, and have two drawers."),
	furniture('Modern Nightstand', 'DreamSleep', 155, '2019', '(+48) 270 214 252', 'images/nightstand_expensive.png','https://sketchfab.com/models/d75ebd14f6394e0599f7b96cc14a51cd/embed?autostart=1&amp;camera=0',"New handmade  Nightstand - DreamSleep, designed as antique, made of rear kind of red tree, this set includes oldstyle lamp.")   
]
new Vue({
	el: '#app',
	data:{
        inventory:[
           
        ],
        cartItemsIndexes: [],
        cart: 0,
		furnitures:furnitures,
		furniture: furnitures[0],
		selectedFurnitureIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false,
		modalVisibilityCard: false,
		
	},
	methods:{
		selectFurniture: function(furniture, index){
			console.log('Click', index)
			this.furniture = furniture
			this.selectedFurnitureIndex = index
		},
        addToCartItem: function(cardFurnitures, CartIndex){
            this.cart += this.furniture.price
            this.cartItemsIndexes.push(this.selectedFurnitureIndex)
            this.inventory.push({name:furnitures[this.selectedFurnitureIndex].name,price:furnitures[this.selectedFurnitureIndex].price})
        }
	},
	computed:{
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredFurnitures() {
			return this.furnitures.filter(furniture =>{
				return furniture.name.indexOf(this.search) > -1 || furniture.model.indexOf(this.search) > -1
			})
        }
	}
});

