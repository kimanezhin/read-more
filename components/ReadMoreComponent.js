let template = '<div><p v-html="formattedString"></p> ' 
	template += '<span v-show="text.length > maxChars">'
	template += ' <a :href="link" id="readmore" v-show="!isReadMore" v-on:click="triggerReadMore($event, true)">{{moreStr}}</a>' 
	template += ' <a :href="link" id="readmore" v-show="isReadMore" v-on:click="triggerReadMore($event, false)">{{lessStr}}</a>' 
	template += '</span>'
	template += '</div>'

export default{
		template,
		props: {
			moreStr: {
				type: String,
				default: 'read more'
			},
			lessStr: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				required: true
			},
			link: {
				type: String,
				default: '#'
			},
			maxChars: {
				type: Number,
				default: 100
			}
		},

		data (){
			return{
				isReadMore: false
			}
		},

		computed: {
			formattedString(){
				let val_container = this.text;

				if(!this.isReadMore){
					val_container = val_container.substring(0,this.maxChars) + '...';
				}

				return(val_container);
			}
		},

		mounted() {

		},

		methods: {
			triggerReadMore(e, b){
				if(this.link == '#'){
					e.preventDefault();
				}
				if(this.lessStr !== null || this.lessStr !== '')
					this.isReadMore = b;
			}
		}
	}