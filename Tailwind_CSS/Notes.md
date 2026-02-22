<!-- ****************************************************** -->

1: Color

<!-- bg-red-500 -->

color intensity: 50 to 950

<!--Intensity:  50 100 200 300 400 500 600 700 800 900 950 -->
<!-- colors: red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose slate gray zinc neutral stone taupe mauve mist olive -->
<!-- white and black don't have any intensity -->

<!-- text-color-intensity --> for text color

<!-- ****************************************************** -->

2: Border

<!-- border --> It will add default border with size 1px
<!-- border-2 --> 2px border
<!-- border-color-intensity --> for border color

<!-- border-t, border-r, border-b, border-l -->

top, right botton left

<!-- border-t-2 --> border top 2px

<!-- ****************************************************** -->

3: Margin

<!-- m-1 --> here 1 points to 4px , 0.25rem, margin of 4px on all side
<!-- mx-1 --> horizontal margin
<!-- my-1 --> vertical margin
<!-- mt mb ml mr -->

<!-- ****************************************************** -->

4: Padding

<!-- p-1 --> here 1 points to 4px, padding of 4px on all side: 16px === 1rem
<!-- px-1 --> Horizontal padding
<!-- py-1 --> Vertical padding
<!-- pt pb pl pr -->

p-[1px] <- custom input of 1px

<!-- ****************************************************** -->
<!-- Text ka size increase karna ho to text-xs  text-sm ..... -->

Class Font Size (rem) Font Size (px)
text-xs 0.75rem 12px
text-sm 0.875rem 14px
text-base 1rem 16px (default)
text-lg 1.125rem 18px
text-xl 1.25rem 20px
text-2xl 1.5rem 24px
text-3xl 1.875rem 30px
text-4xl 2.25rem 36px
text-5xl 3rem 48px
md (medium)

<!--  <img className="w-full h-48 object-cover rounded-xl"  -->

w -> width w-xs w-full w-28
h -> height h-xs

max-w-xs -> maximum width xs  
min-h-screen
overflow-hidden
shadow-md shadow-lg shadow-xl
object-cover -> image zoom out . maintains aspect ratio of image. eg. w-full h-48 image not looks good for this use object-cover

for border-radius :
rounded
xs, sm, md, lg, xl, 2xl,....,full -> rounded-xs
rounded-b-sm
rounded-t-xl

for font-size :
font-bold

<!-- bold semibold extrabold black-->

flex
justify-center
justify-between
items-center
flex-col
hover:bg-sky-800 hover:scale-105
transition
flex-wrap
gap-10 (vertical +horizontal both gap-y-10 (vertical only) gap-x-10 (horizontal only))
space-x-4 (horizontal space)
space-y-4 (vertical space)

gap works in flex & grid.applies to all grid items.recommended
space works in mostly flex . applies to only direct children.old style

text-center

md:grid-cols-8 ka matlab kya hai? (Tailwind CSS)
md:grid-cols-8 ek responsive grid class hai Tailwind me.
Iska breakdown 👇
grid → CSS Grid enable karta hai
grid-cols-8 → 8 columns bana deta hai
md: → Medium screen se apply hoga

grid
grid-cols-4

bg-red-500 md:bg-green-500

relative
absolute
bottom-4
left-4
z-10
space-y-2
space-x-2
