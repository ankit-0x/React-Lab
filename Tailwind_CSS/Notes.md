<!-- ****************************************************** -->

1: Color

<!-- bg-red-500 -->

color intensity: 50 to 950

<!--Intensity:  50 100 200 300 400 500 600 700 800 900 950 -->
<!-- colors: red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose slate gray zinc neutral stone taupe mauve mist olive -->
<!-- white and black don't have any intensity -->

bg-[#ff5200] <- custom color

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

🔹 max-w-xs max-w-screen-> maximum width xs max-w-[60%] <- custom max-w-5xl
🔹 min-h-screen -> Page full height lega. min-h-xl max-h-screen min-w-screen
overflow-hidden
shadow-md shadow-lg shadow-xl drop-shadow-lg shadow
object-cover -> image zoom out . maintains aspect ratio of image. eg. w-full h-48 image not looks good for this use object-cover

for border-radius :
rounded
xs, sm, md, lg, xl, 2xl,....,full -> rounded-xs
rounded-b-sm
rounded-t-xl

for font-size :
font-bold
font-serif <- font family

<!-- bold semibold extrabold black-->

flex
justify-center
justify-between
items-center
flex-col
flex-1
transform
transition transition-all
transition-transform
duration-100
hover:scale-105
hover:bg-sky-800
active:scale-95
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
md:w-[80%] -> medium size screen pe width 80% ho jayega

grid
grid-cols-4
grid-rows-2
grid-flow-col

bg-red-500 md:bg-green-500

relative
absolute
sticky
top-0
bottom-4 (positive) -bottom-4 (negative)
left-4
z-10

container mx-auto <- container bana diya aur horizontal margin auto : more flexible and resposive then manually margin left right : used to bring content in center of container

shrink-0
overflow-x-auto
overflow-y-auto
flex-nowrap
flex-none

tracking-wide
cursor-pointer
truncate line-clamp-2
inset-0
bg-linear-to-t from-black/70 via-black/30 to-transparent
bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200
animate-pulse (pulse,ping,bounce,spin,none)
============================================================
group
group-hover:text-orange-500
Tailwind CSS me group ek utility class hai jo parent ke hover (ya focus) state ko child elements par apply karne ke liye use hoti hai.

Simple words me:

Parent ko group do → Child me group-hover: use karo

✅ Basic Example

<div className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
  <h2 className="text-gray-700 group-hover:text-orange-500 transition">
    Pizza Hut
  </h2>
</div>
🔥 Kya hoga?

Jab parent div hover hoga

Tab h2 ka color orange ho jayega

proxyUrl = "https://cors-anywhere.herokuapp.com/";

chinese wok: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&catalog_qa=undefined&submitAction=ENTER

pizza-hut: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER

Subway: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=614570&catalog_qa=undefined&submitAction=ENTER

pizza-hut search api:
https://www.swiggy.com/dapi/menu/pl/search?lat=28.7040592&lng=77.10249019999999&restaurantId=16866&isMenuUx4=true&query=ta&submitAction=ENTER
pizza-hut search api:
https://www.swiggy.com/dapi/menu/pl/search?lat=28.7040592&lng=77.10249019999999&restaurantId=16866&isMenuUx4=true&query=tan&submitAction=ENTER

Parameters jo change hote hain:
query → User ke search input ke according (e.g., ta, tan)
restaurantId → Restaurant ke according change hoga

Issue: Swiggy Search API Restrictions
Swiggy ne is search API par restrictions laga rakhi hain.

Yeh API:
Sirf tab response deti hai jab Swiggy ki website active session ke saath open ho.
Direct backend ya external server (jaise Heroku) se call karne par data return nahi karti.

Reason:
API request ke saath:
Valid cookies
Session data
Required headers
send karne padte hain.

Cookies se server verify karta hai:
User active hai ya nahi
Session valid hai ya nahi
Request browser se aa rahi hai ya bot/server se

swiggy ne is search api restrictions laga rakhi hai. ye api tabhi data de raha jab swiggy ki website open ho, isko herokuaap se bhi nahi kar payenge kyuki herokuapp mei bhi swiggy open nahi hai, ye cookies maang raha hai, isko backened mei handle karna sikhenge, cookies se pata chalta hai ki mai active user hu ya nahi hu, data fetch karte waqt hame header mei cookies bhi send karni hogi , ye cookies api ke header mei available hai network tab mei
search functionality ko ab manually implement karenge filter karke

===============================================================================================

📘 CORS (Cross-Origin Resource Sharing) – Complete Beginner Friendly Notes

Cors Issue by piyush garg = https://youtu.be/WWnR4xptSRk?si=lC_R0EMHwNzrTE_R
study in more detail when we learn backend

1️⃣ Same-Origin Policy (SOP) Kya Hai?

Browser ka ek important security rule hota hai jise kehte hain:

Same-Origin Policy (SOP)

Is rule ke according:

Ek origin ka JavaScript dusre origin ke API response ko directly read nahi kar sakta.
API response ko sirf same origin ka JavaScript hi access kar sakta hai (jab tak server CORS ke through allow na kare).

Ye rule users ko hackers aur malicious websites se protect karta hai.

🔹 Origin Kya Hota Hai?

Origin = Protocol + Domain + Port

Example:

URL Same Origin? Reason
http://localhost:3000
✔ Same
http://localhost:5000
❌ Port different
https://localhost:3000
❌ Protocol different
https://www.swiggy.com
❌ Domain different

Agar in teeno me se koi bhi alag ho → Origin different ❌

2️⃣ CORS Kya Hai?

CORS ka full form:

Cross-Origin Resource Sharing

CORS ek browser mechanism hai jo allow karta hai:

Server decide kare kaunsa origin uska data access kar sakta hai.

Simple language me:

SOP by default block karta hai ❌

CORS selectively allow karta hai ✅

3️⃣ Real World Example (Swiggy API)

Maan lo:

Frontend chal raha hai:

http://localhost:1234

Tum fetch karte ho:

fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61&lng=77.23")
.then(res => res.json())
.then(data => console.log(data));

Ye API belong karti hai:

Swiggy se

🔍 Browser Kya Karta Hai?

Step-by-step:

Browser request bhejta hai ✔

Swiggy server response deta hai ✔

Browser response header check karta hai:

Access-Control-Allow-Origin

Agar header nahi mila → ❌ BLOCK
Agar header mei mila to origin match karega if not match -> ❌ BLOCK

4️⃣ Typical CORS Error Message (in console)

Access to fetch at 'https://www.swiggy.com/...'
from origin 'http://localhost:1234'
has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present

5️⃣ Sabse Important Concept

✔ Request server tak gayi
✔ Server ne response diya
❌ Browser ne block kar diya

👉 CORS error = Browser security restriction

Server ne mana nahi kiya.
Browser ne security ke liye block kiya.

6️⃣ Required CORS Headers

Server ko response me ye header dena hota hai:

Access-Control-Allow-Origin: http://localhost:1234

Ya:

Access-Control-Allow-Origin: \*

Agar ye header nahi hai → Browser block karega.

7️⃣ Ye Error Kyun Aata Hai?

Kyuki:

Frontend origin = localhost:1234

API origin = swiggy.com

Dono alag hain ❌

Server ne allow nahi kiya

Browser ne block kar diya

8️⃣ "mode: no-cors" Kyu Galat Solution Hai?

Agar tum likho:

fetch(url, { mode: "no-cors" })

To:

Response milega

But data read nahi kar paoge

Opaque response milega

👉 Ye real solution nahi hai.

9️⃣ Correct Solutions
🟢 Solution 1 (Best) – Backend Proxy Banao

Flow:

Frontend → Apna Backend → Swiggy API

Kyuki:

Browser sirf apne backend se baat karega

Backend pe CORS restriction nahi hoti

Example (Node.js):

    const express = require("express");
    const fetch = require("node-fetch");
    const cors = require("cors");

    const app = express();
    app.use(cors());

    app.get("/swiggy", async (req, res) => {
    const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61&lng=77.23"
    );
    const data = await response.json();
    res.json(data);
    });

    app.listen(5000);

Frontend:

    fetch("http://localhost:5000/swiggy")
    .then(res => res.json())
    .then(data => console.log(data));

✅ Ab CORS error nahi aayega

🟡 Solution 2 – Third-Party Proxy (Learning Purpose)

Flow:

Frontend → Proxy → Swiggy API

ye third party server hai jisko ham request bhejte hai then ye server se data fetch karke data modidy karega aur header mei cross origin allow kar dega or add kar dega if not added header and then sent back to requested user
Proxy response me header add karta hai:

Access-Control-Allow-Origin: \*

Example:

<!-- proxyUrl = "https://cors-anywhere.herokuapp.com/"; -->

fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/...")

⚠ Problems:

Production me unsafe

API key leak ho sakti hai

Rate limit issue

🔟 Browser vs Postman
Tool CORS Apply Hota Hai?
Browser ✔ Yes
Postman ❌ No

CORS sirf browser security feature hai.

🔥 Golden Line

Server ne response diya, browser ne security ke liye use rok diya.

💡 Perfect 2-Minute Interview Answer

CORS browser ka security mechanism hai jo different origin se aane wali requests ko restrict karta hai. Agar server response me Access-Control-Allow-Origin header nahi deta, to browser response ko block kar deta hai. Ye backend error nahi hota, ye browser-side security restriction hoti hai. Iska best solution backend proxy ya server-side CORS enable karna hai.

proxyUrl = "https://cors-anywhere.herokuapp.com/";

This API enables cross-origin requests to anywhere.

Usage:

/ Shows help
/iscorsneeded This is the only resource on this host which is served without CORS headers.
/<url> Create a request to <url>, and includes CORS headers in the response.

If the protocol is omitted, it defaults to http (https if port 443 is specified).

Cookies are disabled and stripped from requests.

Redirects are automatically followed. For debugging purposes, each followed redirect results in the addition of a X-CORS-Redirect-n header, where n starts at 1. These headers are not accessible by the XMLHttpRequest API.
After 5 redirects, redirects are not followed any more. The redirect response is sent back to the browser, which can choose to follow the redirect (handled automatically by the browser).

The requested URL is available in the X-Request-URL response header.
The final URL, after following all redirects, is available in the X-Final-URL response header.

To prevent the use of the proxy for casual browsing, the API requires either the Origin or the X-Requested-With header to be set. To avoid unnecessary preflight (OPTIONS) requests, it's recommended to not manually set these headers in your code.

Demo : https://robwu.nl/cors-anywhere.html

Source code : https://github.com/Rob--W/cors-anywhere/

Documentation : https://github.com/Rob--W/cors-anywhere/#documentation

sometimes data is not fetched after using third party server -> go to "https://cors-anywhere.herokuapp.com/corsdemo" and get temeporary access for this ip by clicking on button (Request temporary access to the demo server)-> your data is fetched

How to use Proxy server for handling CORS error ---->

export default function Restaurant(){

    const [RestData, setRestData] = useState({})

    useEffect(()=>{

        async function fetchData() {

            const proxyServer = "https://cors-anywhere.herokuapp.com/";

            const swiggyAPI = "
            https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response. json();
            setRestData(data);

        }
        fetchData();

    }, []);

}

==============================================================================================================

✨ Shimmer Effect – Proper Concept Notes
🔴 Problem

Jab API se data fetch ho raha hota hai:

Screen blank dikhai deti hai

Ya sirf “Loading...” text dikhai deta hai

User ko lagta hai app slow hai

User experience (UX) kharab hota hai

🟢 Solution → Shimmer Effect

Jab tak real data load nahi hota, tab tak hum fake UI structure dikhate hain jise shimmer effect kehte hain.

Matlab:

Card ki jagah grey box

Text ki jagah grey lines

Image ki jagah grey rectangle

Thodi animation (pulse / shine effect)

Ye user ko signal deta hai:

👉 “Yaha content aane wala hai.”

🧠 Real Meaning

Shimmer = Loading ka modern visual representation

Pehle:

Loading...

Ab:

[ Fake Card Structure With Animation ] -> you can create custom design fake card structure according to your real UI and show inplace of real UI until your data is loading. create a js file and create your fake UI and call when data is not loaded like if(data.length ===0) return <shimmer><shimmer> else return ()

🔥 Why Shimmer Better Hai?
Old Loading------------Shimmer
Blank Screen ----------UI structure visible
Sirf text--------------Real layout ka preview
Boring-----------------Modern & smooth
UX weak----------------UX strong

📦 Example Flow
Component Render
↓
API Call Start
↓
Data not available → Shimmer Show
↓
Data received → Real Cards Replace Shimmer

🎯 Short Interview Definition

Shimmer effect ek animated placeholder UI hota hai jo data load hone tak actual layout ka preview show karta hai, taaki user experience better ho.

🏆 Simple Hinglish Definition

Jab data load ho raha hota hai aur screen blank dikhne lagti hai, to us blank space ko fake loading cards se fill kar dete hain. Isi technique ko shimmer effect kehte hain.

============================================================================================================================
🔴 Problem

Jab tum React me:

Page A → Route → Page B

karte ho, to kya hota hai?

👉 Page A ka component unmount ho jata hai
👉 Uska useState data memory se remove ho jata hai
👉 Wapas aane par fresh render hota hai

Isliye data “delete” hota hua lagta hai.

Actually delete nahi hota — component destroy ho jata hai.

🧠 Why Aisa Hota Hai?

React Router jab route change karta hai:

Purana component remove

Naya component mount

State reset

Ye default behavior hai.

✅ Is Problem Ka Solution

Agar tum chahte ho:

Route change hone par bhi data persist rahe

To tumhe state ko component ke bahar store karna padega.

Do common ways 👇

🟢 1️⃣ Redux (Global State)

Redux me data store hota hai global level pe.

Flow:

Component → Redux Store → Any Component Access

Component unmount ho jaye tab bhi:

👉 Redux store me data safe rahega

Best for:

Large apps

Multiple components sharing same data

Complex state management

🟢 2️⃣ Local Storage

Agar tum chahte ho:

👉 Page refresh ke baad bhi data rahe
👉 Browser band karke open karo tab bhi rahe

To use:

localStorage.setItem("restaurants", JSON.stringify(data));

Aur retrieve:

JSON.parse(localStorage.getItem("restaurants"));

Best for:

Small apps

Simple persistence

Cart data

Login token

🟡 3️⃣ Even Simpler Solution (Often Ignored)

Kabhi-kabhi Redux ki zarurat hi nahi hoti.

Agar tum parent component me state rakh do:

App
├── PageA
└── PageB

Aur state App me ho:

const [data, setData] = useState([]);

To route change hone par bhi data rahega.

Ye called hota hai:

Lifting State Up
