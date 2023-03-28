<template>
    <div class="popularBlock">
        <h2 class="popularBlock__title">
            {{ title }}
        </h2>
        <div class="popularBlock__wrapCarousel">
            <carousel class="popularBlock__carousel" :wrapAround="true" :itemsToScroll="1" :itemsToShow="((width <= 768) ? 1 : ((width <= 1199) ? 2 : 4))" snapAlign="start">
                <slide v-for="(item, idx) in SLIDER" :key="idx">
                    <ItemSlide :content="item" />
                </slide>
                <template #addons>
                    <Navigation />
                </template>
            </carousel>
        </div>
        <div class="listLink">
            <a :href="item.download_url" v-for="(item, idx) in ListSelected" :key="idx" class="listLink__item" target="_blanc">
                {{ item.download_url }}
            </a>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'

import ItemSlide from '@/components/ItemSlide.vue'

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
export default {
	components: {
        Carousel,
        Slide,
        Navigation,
        ItemSlide,
        Pagination
	},
	data() {
		return {
			title: "Slider Images",
            width: 0
		}
	},
    computed: {
        ...mapGetters([
            'SLIDER',
        ]),
        ListSelected () {
            if(this.SLIDER) {
                return this.SLIDER.filter(item => {
                    if(item.selected) {
                        return true
                    }
                })
            }
            return []
        }
    },
	methods: {
        updateWidth() {
            this.width = window.innerWidth;
        },
        ...mapActions([
            'GET_SLIDER_FROM_API'
        ]),
	},
	mounted() {
        this.GET_SLIDER_FROM_API()
	},
    created() {
        this.width = window.innerWidth;
        window.addEventListener('resize', this.updateWidth);
    },
}
</script>

<style lang="scss">


.bContent__btnGreen.allIttem {
    margin: desktop-vw(54) auto 0 auto;
    padding: 0 desktop-vw(40);

    &:after {
        content: "";
        display: block;
        width: desktop-vw(21);
        height: desktop-vw(13);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 21 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.5555 12.7274C13.469 12.6411 13.4004 12.5387 13.3536 12.4259C13.3068 12.3131 13.2827 12.1922 13.2827 12.0701C13.2827 11.948 13.3068 11.8271 13.3536 11.7143C13.4004 11.6015 13.469 11.499 13.5555 11.4128L18.4702 6.49988L13.5555 1.58695C13.3811 1.41263 13.2832 1.17619 13.2832 0.929664C13.2832 0.683134 13.3811 0.446701 13.5555 0.272378C13.7298 0.0980549 13.9662 0.00012204 14.2127 0.00012203C14.4593 0.000122019 14.6957 0.0980548 14.87 0.272378L20.4402 5.84259C20.5267 5.92883 20.5953 6.03128 20.6421 6.14407C20.6889 6.25685 20.713 6.37777 20.713 6.49988C20.713 6.62199 20.6889 6.7429 20.6421 6.85569C20.5953 6.96848 20.5267 7.07093 20.4402 7.15716L14.87 12.7274C14.7838 12.8138 14.6813 12.8824 14.5686 12.9292C14.4558 12.976 14.3349 13.0001 14.2127 13.0001C14.0906 13.0001 13.9697 12.976 13.8569 12.9292C13.7441 12.8824 13.6417 12.8138 13.5555 12.7274Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.287109 6.49998C0.287109 6.25376 0.38492 6.01762 0.559023 5.84352C0.733126 5.66942 0.96926 5.57161 1.21548 5.57161L17.9261 5.57161C18.1723 5.57161 18.4085 5.66941 18.5826 5.84352C18.7567 6.01762 18.8545 6.25376 18.8545 6.49997C18.8545 6.74619 18.7567 6.98233 18.5826 7.15643C18.4085 7.33053 18.1723 7.42834 17.9261 7.42834L1.21548 7.42834C0.96926 7.42834 0.733126 7.33053 0.559023 7.15643C0.38492 6.98233 0.287109 6.74619 0.287109 6.49998Z' fill='white'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
    }
}

.carousel__prev {
    position: absolute;
    bottom: desktop-vw(-75);
    left: auto;
    right: desktop-vw(90);
    top: auto;
    width: desktop-vw(40);
    height: desktop-vw(40);
    background: #E0EFF6;
    border-radius: 50%;

    & > svg {
        display: none;
    }

    &:after {
        content: "";
        display: block;
        width: desktop-vw(16);
        height: desktop-vw(12);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.52051 4.00003C9.52051 4.11853 9.47343 4.23218 9.38964 4.31598C9.30585 4.39977 9.1922 4.44684 9.0737 4.44684L1.03111 4.44684C0.912606 4.44684 0.798958 4.39977 0.715164 4.31598C0.631372 4.23218 0.584297 4.11854 0.584297 4.00003C0.584297 3.88153 0.631372 3.76788 0.715164 3.68409C0.798958 3.6003 0.912606 3.55322 1.03111 3.55322L9.0737 3.55322C9.1922 3.55322 9.30585 3.6003 9.38964 3.68409C9.47343 3.76788 9.52051 3.88153 9.52051 4.00003Z' fill='%2307484A'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2838 3.68378C10.3254 3.72529 10.3584 3.77459 10.3809 3.82888C10.4034 3.88316 10.415 3.94135 10.415 4.00013C10.415 4.0589 10.4034 4.11709 10.3809 4.17137C10.3584 4.22566 10.3254 4.27496 10.2838 4.31647L7.60291 6.99733C7.51901 7.08123 7.40522 7.12836 7.28657 7.12836C7.16792 7.12836 7.05412 7.08123 6.97023 6.99733C6.88633 6.91343 6.83919 6.79964 6.83919 6.68099C6.83919 6.56234 6.88633 6.44855 6.97023 6.36465L9.33564 4.00013L6.97022 1.6356C6.88633 1.55171 6.83919 1.43791 6.83919 1.31926C6.83919 1.20061 6.88633 1.08682 6.97022 1.00292C7.05412 0.919022 7.16792 0.871888 7.28657 0.871888C7.40522 0.871888 7.51901 0.919022 7.60291 1.00292L10.2838 3.68378Z' fill='%2307484A'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        transform: rotate(180deg);
    }
}

.carousel__next {
    position: absolute;
     bottom: desktop-vw(-75);
    width: desktop-vw(40);
    height: desktop-vw(40);
    left: auto;
    right: desktop-vw(30);
    top: auto;
    background: #F9D9DA;
    border-radius: 50%;

    & > svg {
        display: none;
    }

    &:after {
        content: "";
        display: block;
        width: desktop-vw(16);
        height: desktop-vw(12);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.52051 4.00003C9.52051 4.11853 9.47343 4.23218 9.38964 4.31598C9.30585 4.39977 9.1922 4.44684 9.0737 4.44684L1.03111 4.44684C0.912606 4.44684 0.798958 4.39977 0.715164 4.31598C0.631372 4.23218 0.584297 4.11854 0.584297 4.00003C0.584297 3.88153 0.631372 3.76788 0.715164 3.68409C0.798958 3.6003 0.912606 3.55322 1.03111 3.55322L9.0737 3.55322C9.1922 3.55322 9.30585 3.6003 9.38964 3.68409C9.47343 3.76788 9.52051 3.88153 9.52051 4.00003Z' fill='%2307484A'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2838 3.68378C10.3254 3.72529 10.3584 3.77459 10.3809 3.82888C10.4034 3.88316 10.415 3.94135 10.415 4.00013C10.415 4.0589 10.4034 4.11709 10.3809 4.17137C10.3584 4.22566 10.3254 4.27496 10.2838 4.31647L7.60291 6.99733C7.51901 7.08123 7.40522 7.12836 7.28657 7.12836C7.16792 7.12836 7.05412 7.08123 6.97023 6.99733C6.88633 6.91343 6.83919 6.79964 6.83919 6.68099C6.83919 6.56234 6.88633 6.44855 6.97023 6.36465L9.33564 4.00013L6.97022 1.6356C6.88633 1.55171 6.83919 1.43791 6.83919 1.31926C6.83919 1.20061 6.88633 1.08682 6.97022 1.00292C7.05412 0.919022 7.16792 0.871888 7.28657 0.871888C7.40522 0.871888 7.51901 0.919022 7.60291 1.00292L10.2838 3.68378Z' fill='%2307484A'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
    }
}

.popularBlock {
    padding: 0 desktop-vw(20) desktop-vw(120) desktop-vw(20);
    position: relative;
    width: 100%;

    &__wrapCarousel {
        width: 100%;
        padding: 0 0 desktop-vw(100);
    }

    &__title {
        margin-bottom: desktop-vw(58);
        font-family: 'PlayfairDisplay';
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(64);
        line-height: 150%;
        color: #07484A;
        text-align: center;
    }
}

.listLink {
    display: flex;
    width: 100%;
    grid-gap: desktop-vw(20);
    flex-wrap: wrap;

    &__item {
        color: #0069b2;
        font-style: italic;
        font-size: desktop-vw(16);

        &:hover {
            color: #bd4f24;
        }
    }
}

@media screen and (max-width: $tablet) {
    .bContent__btnGreen.allIttem {
        margin: tablet-vw(54) auto 0 auto;
        padding: 0 tablet-vw(40);

        &:after {
            width: tablet-vw(21);
            height: tablet-vw(13);
        }
    }

    .carousel__prev {
        bottom: tablet-vw(-75);
        right: tablet-vw(100);
        left: auto;
        width: tablet-vw(40);
        height: tablet-vw(40);

        &:after {
            width: tablet-vw(16);
            height: tablet-vw(12);
        }
    }

    .carousel__next {
        bottom: tablet-vw(-75);
        width: tablet-vw(40);
        height: tablet-vw(40);
        right: tablet-vw(30);
        left: auto;

        &:after {
            width: tablet-vw(16);
            height: tablet-vw(12);
        }
    }

    .popularBlock {
        padding: 0 tablet-vw(20) tablet-vw(120) tablet-vw(20);

        &__wrapCarousel {
            padding: 0 0 tablet-vw(100);
        }

        &__title {
            margin-bottom: tablet-vw(58);
            font-size: tablet-vw(44);
        }
    }

    .listLink {
        grid-gap: tablet-vw(20);
        justify-content: center;

        &__item {
            font-size: tablet-vw(16);
        }
    }
}
@media screen and (max-width: $mobile) {
    .bContent__btnGreen.allIttem {
        margin: mobile-vw(54) auto 0 auto;
        padding: 0 mobile-vw(40);

        &:after {
            width: mobile-vw(21);
            height: mobile-vw(13);
        }
    }

    .carousel__prev {
        bottom: mobile-vw(-65);
        right: mobile-vw(65);
        left: auto;
        width: mobile-vw(40);
        height: mobile-vw(40);

        &:after {
            width: mobile-vw(16);
            height: mobile-vw(12);
        }
    }

    .carousel__next {
        bottom: mobile-vw(-65);
        width: mobile-vw(40);
        height: mobile-vw(40);
        right: mobile-vw(10);
        left: auto;

        &:after {
            width: mobile-vw(16);
            height: mobile-vw(12);
        }
    }

    .popularBlock {
        padding: 0 mobile-vw(10) mobile-vw(120) mobile-vw(10);

        &__wrapCarousel {
            padding: 0 0 mobile-vw(70);
        }

        &__title {
            margin-bottom: mobile-vw(18);
            font-size: mobile-vw(34);
        }
    }

    .listLink {
        grid-gap: mobile-vw(20);
        justify-content: center;

        &__item {
            font-size: mobile-vw(10);
        }
    }
}

</style>