


## oamk-animation

This is my homework for the web animation course at Oulu University of Applied Sciences.

The page is built on [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), which allows for responsive layouts that are easy to customize to different sizes.

For example, here is my main wrapper class for the website:

```
.wrapper {
	transition: all .2s ease-in-out;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-auto-rows: minmax(100px, auto);
	grid-gap: 10px;
	grid-template-areas:
	". hd1 hd1 hd2 hd2 hd2 hd2 hd2 hd2 ."
	"a a a a a a a a a a"
	". b b b b b b c c ."
	". d d d d d d d d ."
	". e e e e e e e e ."
	". f f f f f f f f ."
	". ft ft ft ft ft ft ft ft .";
}
```

The `grid-template-areas` defines the layout and it can be redefined for breakpoints:

```
@media only screen and (max-width: 1299px) {
	.wrapper{
		margin-left: 2%;
		margin-right: 2%;
		grid-template-areas:
		". hd1 hd1 hd2 hd2 hd2 hd2 hd2 hd2 ."
		"a a a a a a a a a a"
		"b b b b b b b c c c"
		"d d d d d d d d d d"
		"e e e e e e e e e e"
		"f f f f f f f f f f"
		"ft ft ft ft ft ft ft ft ft .";
	}
}
```

***


The page can be previewed [here](https://joonakeskitalo.github.io/oamk-animation/).

