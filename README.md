# Random Ass Wednesdays

Random Ass Wednesdays (RAW), is a blog/content website that serves as a creative outlet for its owners. It will feature monthly content, letters and writing covering a variety of essentially random topics. Conceptualized by Rico Reyes and graphics designer Kurt Serrano, they spearhead a team of copywrites and developers who build and contribute to the website. It is completely mobile responsive.

[Visit The Website Here!](https://random-ass-wednesday.com)

![image](https://user-images.githubusercontent.com/81446472/190063992-624215ce-e1e1-4af0-92c1-11887a9a3ec0.png)
![image](https://user-images.githubusercontent.com/81446472/190064031-3fdba0f3-7eec-40af-82f4-22d6f6339c6c.png)
![image](https://user-images.githubusercontent.com/81446472/190064073-e4f95524-6cf8-4456-a81f-ce6dae15bace.png)

## Tech Stack
### Next.js

The project was built on the Next.js framework. This decision was made mainly due to the nature of how it optimizes static content. Being a blog-like website, the content is rarely dynamic, and usually scheduled. Next.js and the way it pre-renders pages and files made it perfect for optimizing user experience with snappy load times. This became especially true when working with hi-res imagery and graphics, in which we take full advantage of the frameworks native Image component to optimize load times for our graphics.

### Vanilla CSS and Animations

Whilst we do take advantage of FONTAWESOME and a few of its icons, the majority of the project shapes and animations (including those of the hamburger menu) are done using vanilla CSS. We've discouraged the use of third party libraries to keep things lightweight (and challenging in a way.).

### Vercel

The projects master branch is currently automatically deployed to Vercel, which was the recommended hosting site for Next.js projects. Integration was extremely simple, and the platform has made the process as 'set and forget' as it can get.
