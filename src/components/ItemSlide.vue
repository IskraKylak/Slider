<template>
    <div class="slide">
		<div class="slide_img" :class="content.selected ? 'selected' : ''" @click="content.selected = !content.selected">
			<img :src="content.download_url" alt="img">
		</div>
    </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'

export default {
	props: [ "content" ],
	data() {
		return {
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style lang="scss">

.slide {
	&_img {
		position: relative;
		width: desktop-vw(400);
		height: desktop-vw(400);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border-radius: 10px;
		transition: all 0.3s ease;
		border: 0 solid #ed7d4a;

		&:hover {
			border: 10px solid #f0dfd8;
		}

		&.selected {
			border: 10px solid #ed7d4a;
		}

		img {
			position: absolute;
			object-fit: cover;
			width: 100%;
			height: 100%;
			transition: all 0.5s ease;
		}
	}
}

@media screen and (max-width: $tablet) {
	.slide {
		&_img {
			width: tablet-vw(300);
			height: tablet-vw(300);
		}
	}
}
@media screen and (max-width: $mobile) {
	.slide {
		&_img {
			width: mobile-vw(350);
			height: mobile-vw(250);
		}
	}
}

</style>