<template>
	<div class="foreign">
		<div class="versions">国际新闻</div>
		<div class="news-list">
            <ol>
              <li v-for="newsList in foreignNewsData">
              	  <div class="one">
              	 	 <img v-bind:src="newsList.thumbnail_pic_s">
              	  </div>
              	  <div class="two">
                 	 <a v-bind:href="newsList.url">{{newsList.title}}</a>
                  </div>
              </li>
            </ol>
         </div>
	</div>
</template>

<script type="text/ecmascript-6">
const ERR_OK = 0

export default {
  data () {
    return {
      foreignNewsData: {}
    }
  },
  created () {
    this.$http.get('/api/foreignNewsData').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.foreignNewsData = response.data
        console.log(this.foreignNewsData)
      }
    })
    this.$http.get('/api/oneForeignNews').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.oneForeignNews = response.data
        console.log(this.oneForeignNews)
      }
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
* {
	padding: 0;
	margin: 0;
}
.foreign {
	.news-list {
		ol {
			padding: 10px;
			li {
				display: block;
				padding: 4%;
				list-style: none;
				.one,.two {
					float: left;
					overflow: auto;
				}
				.one {
					height: 80px;
					width: 20%;
					img {
						width: 80px;
						height: 60px;
					}
				}
				.two {
					width: 75%;
					margin-left: 2%;
					height: 80px;
					a {
						font-size: 0.8em;
						text-decoration: none;
					}
				}
			}
		}
	}
}
</style>
