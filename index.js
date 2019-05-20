const furniture = (name, model, price, year, phone, image, link) => ({name, model, price, year, phone, image, link})
const furnitures = [
	furniture('Sofa', 'Focus', 380, '2016', '(+48) 110 453 678', 'images/sofa.png', 'https://sketchfab.com/models/05cf520deaa74291b988a89415172bee/embed?autostart=1&amp;camera=0'),
	furniture('Table', 'Italia', 120, '2018', '(+48) 521 213 229', 'images/table.png','https://sketchfab.com/models/cb6f2a6bb4f44ce8a39babe4387024d0/embed?autostart=1&amp;camera=0'),
	furniture('Bed', 'Sky', 500, '2016', '(+48) 520 982 225', 'images/bed.png','https://sketchfab.com/models/46efcd8b0116410abd6a56fb6a528812/embed?autostart=1&amp;camera=0'),
	furniture('Nightstand', 'Silence', 89, '2016', '(+48) 570 343 555', 'images/nightstand.png','https://sketchfab.com/models/cd8f85e8a5dd4926bac1f47d66ddee8e/embed?autostart=1&amp;camera=0'),
	furniture('Modern Nightstand', 'DreamSleep', 155, '2019', '(+48) 270 214 252', 'images/nightstand_expensive.png','https://sketchfab.com/models/d75ebd14f6394e0599f7b96cc14a51cd/embed?autostart=1&amp;camera=0')
    
]
new Vue({
	el: '#app',
	data:{
        cartItemsIndexes: [],
        cartItemsAll: [],
        cartItemsNames:[],
        cartItemsPrices:[],
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
        /*show: function(){
            alert("Your order: "+ this.cart + '$')
        },*/
        addToCartItem: function(){
            this.cart += this.furniture.price
            this.cartItemsIndexes.push(this.selectedFurnitureIndex)
            alert("Your index: " + this.cartItemsIndexes)
            alert("Your order is " + furnitures[this.selectedFurnitureIndex].name)
            this.cartItemsAll.push(furnitures[this.selectedFurnitureIndex].name)
            this.cartItemsAll.push(furnitures[this.selectedFurnitureIndex].price)
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
        },
	}
});

