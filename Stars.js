/***************************************
 * Data Arrays
 ***************************************/
const it = "#ff1808";
const c = "#ffc800";
const m = "#ff0059";
const co = "#ffffff";
const coR = "#ffdf74"; //constellation RELATED calls (any perserverence calls) or non constellation pairings

const stars = [
    {
        title: "#1 | Boys and Girls Club Hollywood",
        description: "Los Angeles, CA, United States",
        takeaway: "EMPTY",
        color: m,
        coordinates: { lat: 34.0722, lng: -118.4441}
    },
    {
        title: "#2 | Mar Vista Family Center",
        description: "Los Angeles, CA, United States",
        takeaway: "EMPTY",
        color: m,
        coordinates: { lat: 34.01789948305538, lng: -118.42802993837986 }
    },
    {
        title: "#3 | Call with Deanna Pham",
        description: "Los Angeles, CA, United States",
        takeaway:
            "We can maximize our impact by being strategic about how we cold reach out to mentors and hosting panels to connect other teams with industry mentors.",
        color: c,
        coordinates: { lat: 34.0722, lng: -118.4441 }
    },
    {
        title: "#4 | Call with BearBella Robotics",
        description: "Scarborough, Ontario, Canada",
        takeaway: "It was so fun being able to connect with another girls team from another part of the world! They taught us  how we can maximize our social media viewership by paying detailed attention to the algorithm and what is trending as well as using thoughtful hashtags to promote our videos to new audiences. Additionally, being able to share advice on approaches to portfolio creation and judging was truly rewarding especially seeing how inspired they felt after hearing about our process and experiences.",
        color: it,
        coordinates: { lat: 43.7764, lng: -79.233238 }
    },
    {
        title: "#5 | Call with Minerva 24809",
        description: "Muang, 50, Thailand",
        takeaway:
            "We learned about differential power transfers and were introduced to different types of 3D printer filaments to experiment with. It was rewarding to not only receive valuable advice on hardware but also share our own expertise on the judging portion of the competition.",
        color: it,
        coordinates: { lat: 13.22, lng: 100.31 }
    },
    {
        title: "#6 | TAC Portfolio Feedback",
        description: "San Juan Capistrano, California, USA",
        takeaway:
            "Ensure cohesive and consistent page templates/colors/fonts to make your entire portfolio easy to follow and aesthetically pleasing! Making sure to use clear language and specifics can make a portfolio page shine.",
        color: it,
        coordinates: { lat: 33.501694, lng: -117.662552 }
    },
    {
        title: "#7 | 17062 Techalongs Portfolio Feedback",
        description: "Scottsdale, Arizona,  United States",
        takeaway:
            "Break up text and make sure to ensure that collaborative elements come through with your portfolio. Similarly, ensuring multiple people read over a page and that information is concise/not repeated by working as a team results in a strong portfolio! ",
        color: it,
        coordinates: { lat: 33.501324, lng: -111.925278 }
    },
    {
        title: "#8 | Tennessine Titans Portfolio Feedback",
        description: "Maryville, Tennessee, United States",
        takeaway:
            "Make sure to showcase your distinct efforts and initiatives with specific references, well-defined sections, and clear text and images. Also, strategically organize your page-by-page content so that your portfolio is intuitive to read and understand.",
        color: it,
        coordinates: { lat: 35.7587541362, lng: -83.971332085 }
    },
    {
        title: "#9 | Tennessine Titans Call",
        description: "Maryville, Tennessee, United States",
        takeaway:
            "Strategically organizing the information that goes on each portfolio page is super important, because it helps readers intuitively understand the content of your portfolio!",
        color: it,
        coordinates: {lat:35.75875413620, lng:-90.9713320850}
    },
     {
        title: "#10 | Call with Robonerds 5089",
        description: "Los Angeles, CA, United States",
        takeaway:
            "We learned about the LAUSD FTC program and the specific needs of the students. Our next steps are to launch the Perseverance program with targeted workshops, hands-on support throughout the season, and expanded collaboration through the Constellation program.",
        color: coR,
        coordinates: { lat: 34.1722, lng: -118.5}
    },
    { title: "#11 | Call with iAmAngel Foundation",
        description: "Los Angeles, CA, United States",
        takeaway:
            "We learned about the structure and formatting of the LAUSD FTC season and identified key areas where our team can provide meaningful support. It was valuable to discuss next steps for the Perseverance program and brainstorm ideas as we begin launching it.",
        color: coR,
        coordinates: { lat: 34.1722, lng: -118.5}
    },
       { title: "#12 | 23344 Technical Turbulence Portfolio Feedback",
        description: "Plano, TX, United States",
        takeaway:
            "Charts and diagrams are a super useful way to communicate technically complex information, and when done well, allow you to minimize word count while still communicating effectively. ",
        color: it,
        coordinates: { lat: 33.0217, lng: -96.6980}
    },
     { title: "#13 | Call with Sarah Nwakudu",
        description: "Berkeley, CA, United States",
        takeaway:
            "We learned about industry best practices for injection molding and plastic casting from a pioneering female engineer! Discussing our future directions for our plastic project and receiving expert guidance on measuring real-life parts was incredibly valuable.",
        color: c,
        coordinates: { lat: 37.716, lng: -122.2727}
    },
        { title: "#14 | Call with Ruth Turgeman - Everglow",
        description: "Jerusalem, JM, Israel",
        takeaway:
            "Working with those in our community to support their robot design and create access to parts empowers all of us by lifting up our competition. ",
        color: it,
        coordinates: {lat: 31.1769, lng: 34.8224}
    },
         { title: "#15 | Violets 101 New Students Orientation",
        description: "Los Angeles, CA, United States",
        takeaway:
            "It was incredible to be able to share our love for FIRST and robotics with an audience of new students at our school and get them interested in our robotics program!",
        color: m,
        coordinates: { lat: 34.08720821088031, lng: -118.32861041712056}
    },
        { title: "#16 | FilaBot Call",
        description: "Barre, Vermont, United States",
        takeaway:
            "We learned the standard procedure for dehydrating polypropylene chips to extrude with the Filabot! Our next steps will be to create our own DIY pellet dryer and test with the Filabot filament extruder. ",
        color: c,
        coordinates: { lat: 44.191, lng: -72.502}
    },
        { title: "#17 | Rich Silberfeld / Scrap Conversion ",
        description: "Bohemia, New York, United States",
        takeaway:
            "We learned about the best practices for processing polypropylene and about different ways of dehydrating it as well as future steps for our plastic recycling project.",
        color: c,
        coordinates: {lat: 40.76447, lng: -73.10070} 
    },
      { title: "#18 | Kickoff Portfolio Presentation #1",
        description: "Los Angeles, CA, United States",
        takeaway:
            "We learned how fun it is to share our knowledge about creating the portfolio with other teams and how we can effectively address their questions.",
        color: it,
        coordinates: { lat: 34.08720821088031, lng: -118.32861041712056} 
    },
      { title: "#19 | Kickoff Portfolio Presentation #2",
        description: "Los Angeles, CA, United States",
        takeaway:
            "We learned about the different ways teams in our region approach the portfolio process, and we gained some insight into the ways that smaller teams break down large tasks like the portfolio. ",
        color: it,
        coordinates: { lat: 34.08720821088031, lng: -118.32861041712056} 
    },
      { title: "#20 | 27621 Heron Robotics Portfolio Feedback",
        description: "Palo Alto, California, United States",
        takeaway:
            "It is important to make sure to use a consistent color scheme and descriptions for outreach. Also, coming up with unique titles for each page will enhance the personality of your portfolio.",
        color: it,
        coordinates: {lat:37.4419, lng:-122.1430} 
    },
    { title: "#21 | iAmAngel x LAUSD Build Day",
        description: "Los Angeles, CA, United States",
        takeaway:
            "It was such a valuable experience to be able to share our technical knowledge in person and help teams in need! We learned about new video editing techniques and also some important things to keep in mind for our next lessons which will include java programming and presentational skills, two areas teams expressed an interest in learning more about.",
        color: coR,
        coordinates: { lat: 34.08720821088031, lng: -118.32861041712056}
    },
    { title: "#22 | Build Day Robot Presentation",
        description: "Los Angeles, CA, United States",
        takeaway:
            "We learned first hand how valuable it is to directly give back and share our experience with students in our city. We also discovered that many teams could benefit from additional support in Java programming.",
        color: coR,
        coordinates: { lat: 34.08720821088031, lng: -118.32861041712056}
    },
    { title: "#23 | FLL Tournament Directors Meeting",
        description: "Riverside, CA,  United States",
        takeaway:
            "We can learn a lot by collaborating with other local FLL leaders in our community, and can work with others who compliment our strengths and weaknesses. By reaching out to newer female FTC and FRC teams, we can forge valuable connections while also learning about best practices when running an FLL meet! We also learned the largest paper cup is made out of cement.",
        color: coR,
        coordinates: { lat: 33.953350, lng:-117.396156}
    },
    { title: "#24 | Global Giving Interview",
        description: "Washington, D.C., United States",
        takeaway: "It was incredible to be able to share our love for FIRST with a global audience. We truly enjoyed the rewarding process of being able to raise money for a cause we care about.",
        color: coR,
        coordinates: { lat: 38.9, lng: -77.03}
    },
    {title: "Constellation Team: 19013 G Force",
         description: "Mumbai, India",
         color: co,
         coordinates: { lat: 19.0760, lng: 72.8777 } 
       },
 
          {
         title: "Constellation Team: 12682 The Golden Ratio",
         description: "Cary, USA",
         color: co,
         coordinates: { lat: 42.2132, lng: -88.2477}
          },
        {
         title: "Constellation Team: 7120 Bionica",
         description: "Hewlett, USA",
         color: co,
         coordinates: {lat: 40.6432, lng: -73.6957}
        },
   {
       title: "Constellation Team: 12993 Robokings Aurum",
         description: "Sunshine Coast, Australia",
         color: co,
         coordinates: { lat:-26.6528, lng: 153.0896}
        },
        {
         title: "Constellation Team: 21457 Tennessine Titans",
         description: "Maryvile, USA",
         color: co,
         coordinates: {lat: 35.7565, lng: -83.9705}
        },
        {
          title: "Constellation Team: 8404 Quixsilver",
          description: "San Jose, USA",
          color: co,
          coordinates: {lat: 37.3387, lng: -121.8853}
         },
         {
          title: "Constellation Team: 20701 Team Lovelace",
          description: "New York, USA",
          color: co,
          coordinates: {lat: 40.7128, lng: - 74.0060}
         },
         {
          title: "Constellation Team: 13828 Java Jokers",
          description: "Milwaukee, USA",
          color: co,
          coordinates: { lat: 43.0410, lng: -87.9097 }  // Milwaukee, WI
        },
        {
          title: "Constellation Team: 14340 Haywire",
          description: "Ipswich, Australia",
          color: co,
          coordinates: { lat: -27.616666, lng: 152.7608 }  // Ipswich, AU
        },
        {
          title: "Constellation Team: 23224 Cheesy Bytes",
          description: "San Jose, USA",
          color: co,
          coordinates: { lat: 37.3382, lng: -121.8863 }  // San Jose, CA
        },
        {
          title: "Constellation Team: 24180 Blue Bananas",
          description: "Huntsville, USA",
          color: co,
          coordinates: { lat: 34.7304, lng: -86.5861 }  // Huntsville, AL
        },
        {
          title: "Constellation Team: 17703 Fullmetal Peregrines",
          description: "Middletown, USA",
          color: co,
          coordinates: { lat: 41.5623, lng: -72.6506 }  // Middletown, CT
        },
        {
          title: "Constellation Team: 6133 The Nuts",
          description: "Cincinnati, USA",
          color: co,
          coordinates: { lat: 39.1031, lng: -84.5120 }  // Cincinnati, OH
        },
        {
          title: "Constellation Team: 3188 Squiggle Splat Bang",
          description: "Powell, USA",
          color: co,
          coordinates: { lat: 44.7538, lng: -108.7574 }  // Powell, WY
        },
        {
          title: "Constellation Team: Fibonacci 14126",
          description: "Springfield, USA",
          color: co,
          coordinates: { lat: 44.0462, lng: -123.0220 }  // Springfield, OR
        },
        {
          title: "Constellation Team: 23493 Techno Domination",
          description: "Solon, USA",
          color: co,
          coordinates: { lat: 41.3898, lng: -81.4412 }  // Solon, OH
        },
          {  title: "Constellation Team: 14295 Operation T.A.C.",
          description: "San Juan Capistrano, USA",
          color: co,
          coordinates: {lat: 33.501694, lng: -115.662552 }  // San Juan Capistrano, CA
        },
          {  title: "Constellation Team: 16091 T.W.C.A.",
          description: "Hurricane, USA",
          color: co,
          coordinates: {lat: 37.1753, lng: -113.2899 }  // Hurricane, UT
        },
    
        {  title: "Constellation Team: 24006 LeXT Watermelon Why",
          description: "Agoura Hills, USA",
          color: co,
          coordinates: {lat: 34.1533, lng: -118.7617}  //Agoura Hills, CA, USA
        },
    {  title: "Constellation Team: 17062 Techalongs",
          description: "Scottsdale, USA",
          color: co,
          coordinates: {lat: 33.501324, lng: -111.925278}    
    },
    
    {
        title: "Constellation Team: 15151 Anatronic Kats",
          description: "Dimmitt, USA",
          color: co,
          coordinates: {lat: 34.5509, lng: -102.31186}    
    },
    
    {
     title: "Constellation Team: 4605 RoboHackerz",
          description: "Beaver Dam, USA",
          color: co,
          coordinates: {lat: 43.45583151, lng:  -88.834829994}    
    },
    
     {   title: "Constellation Team: 18025 BSRC Mad About Robots",
          description: "Pune, MH, India",
          color: co,
          coordinates: {lat: 18.5246, lng: 73.8786}    
     },
    {
        
        title: "Constellation Team: 9990 Robo Vikings",
          description: "Greensboro, USA",
          color: co,
          coordinates: {lat: 36.0726, lng:  -79.7915}    
    }   
];

const lines = [
    {
        // Connects Springfield, OR to Solon, OH
        start: { lat: 44.0462, lng: -123.022 }, // Springfield, OR (Fibonacci)
        end: { lat: 41.3898, lng: -81.4412 }, // Solon, OH (Techno Domination)
        options: { color: "white", weight: 3 }
    },
    {
        // Connects Cincinnati, OH to Powell, WY
        start: { lat: 39.1031, lng: -84.512 }, // Cincinnati, OH (The Nuts)
        end: { lat: 44.7538, lng: -108.7574 }, // Powell, WY (Squiggle Splat Bang)
        options: { color: "white", weight: 3 }
    },
    {
        // Remains unchanged as these coordinates were not referenced in your corrections
        start: { lat: 19.076, lng: 72.8777 },
        end: { lat: 42.2132, lng: -88.2477 },
        options: { color: "white", weight: 3 }
    },
    {
        // Connects Huntsville, AL to Middletown, CT
        start: { lat: 34.7304, lng: -86.5861 }, // Huntsville, AL (Blue Bananas)
        end: { lat: 41.5623, lng: -72.6506 }, // Middletown, CT (Fullmetal Peregrines)
        options: { color: "white", weight: 3 }
    },
    {
        // Remains unchanged (NY region to an Australian location, perhaps for a separate visual)
        start: { lat: 40.6432, lng: -73.6957 },
        end: { lat: -26.6528, lng: 153.0896 },
        options: { color: "white", weight: 3 }
    },
    {
        // Connects an external point to San Jose, CA (Cheesy Bytes) – updated end coordinate
        start: { lat: 35.7565, lng: -83.9705 },
        end: { lat: 37.3382, lng: -121.8863 },
        options: { color: "white", weight: 3 }
    },
    {
        // Connects New York City to Milwaukee – unchanged
        start: { lat: 40.7128, lng: -74.006 },
        end: { lat: 43.041, lng: -87.9097 },
        options: { color: "white", weight: 3 }
    },
    {
        // Connects Ipswich, Australia to San Jose, CA (Cheesy Bytes) – updated end coordinate
        start: { lat: -27.616666, lng: 152.7608 },
        end: { lat: 37.3382, lng: -121.8863 },
        options: { color: "white", weight: 3 }
    },
    //Connects TAC and TWCA
    {
        start: {lat: 33.501694, lng: -115.662552 },
        end: {lat: 37.1753, lng: -113.2899 },
        options: {color: "white", weight:3}
    },
    //Connects Watermelon Why and Techalongs
    {
       start: {lat: 34.1533, lng: -118.7617},    
        end: {lat: 33.501324, lng: -111.925278},
       options: {color: "white", weight:3}
    },
    //connects Anatronic Kats and RoboHackers
    {
    start: {lat: 34.5509, lng: -102.31186}, 
        end: {lat: 43.45583151, lng:  -88.834829994} , 
        options: {color: "white", weight:3}
    },
    
    //connects BSRC Mad About Robots and RoboVikings
{
    start: {lat: 18.5246, lng: 73.8786}, 
    end: {lat: 36.0726, lng:  -79.7915}, 
    options:  {color: "white", weight:3}
}
    
];

function createStarIcon(color) {
    const svg = `
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
       <polygon points="12,2 15,10 24,10 17,15 20,23 12,18 4,23 7,15 0,10 9,10"
         fill="${color}" stroke="black" stroke-width="0.5"/>
     </svg>`;
    const encodedSVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const el = document.createElement("div");
    el.className = "star-marker";
    el.style.backgroundImage = `url("${encodedSVG}")`;
    return el;
}

function openTakeaway(button) {
    const takeawayId = button.getAttribute("data-takeaway-id");
    document.getElementById(takeawayId).style.display = "block";
    button.style.display = "none";
}

function closeTakeaway(takeawayDiv) {
    takeawayDiv.style.display = "none";
    const takeawayId = takeawayDiv.id;
    const button = document.querySelector(`button[data-takeaway-id="${takeawayId}"]`);
    if (button) {
        button.style.display = "inline-block";
    }
}

/***************************************
 * Adding Stars to the Map
 ***************************************/
const groupedStars = {};

stars.forEach((star) => {
    if (star.color === co) {
        star.coordinates.lng = star.coordinates.lng - 0.75;
    }
    const lat = star.coordinates?.lat;
    const lng = star.coordinates?.lng;
    if (lat == null || lng == null) {
        console.warn("Skipping star with invalid coordinates:", star);
        return;
    }
    const key = `${lat},${lng}`;
    if (!groupedStars[key]) {
        groupedStars[key] = [];
    }
    groupedStars[key].push(star);
});

Object.keys(groupedStars).forEach((key, index) => {
    const [lat, lng] = key.split(",").map(Number);
    const eventsAtLocation = groupedStars[key];
    const markerEl = createStarIcon(eventsAtLocation[0].color);

    const marker = new maplibregl.Marker({ element: markerEl }).setLngLat([lng, lat]).addTo(map);

    let popupContent = `<div style="max-width:250px;">`;
    eventsAtLocation.forEach((event, i) => {
        if (event.takeaway) {
            popupContent += `
       <div style="border-bottom:1px solid #ccc; margin-bottom:4px; padding-bottom:4px;">
       <strong style="color: #861f18; font-size: 18px;">${event.title}</strong>
         <br><strong style="color: #ed6900; font-size: 16px;">${event.description}</span><br/></strong>
         <button 
           style="margin-top:4px; background-color:#861f18; color:white; border:none; padding:4px 8px; cursor:pointer; border-radius:4px;font-size:14px;"
           onclick="document.getElementById('takeaway-${index}-${i}').style.display = 'block'; this.style.display = 'none';">
           Takeaway
         </button>
         <div 
           id="takeaway-${index}-${i}" 
           class="takeaway" 
           span style="display:none; margin-top:4px; color: #861f18; cursor:pointer;font-size:16px"
           onclick="closeTakeaway(this)">
           ${event.takeaway}
         </div>
       </div>
     `;
        }
        if (!event.takeaway) {
            popupContent += `
       <div style="border-bottom:1px solid #ccc; margin-bottom:4px; padding-bottom:4px;">
          <strong style="color: #861f18; font-size: 18px;">${event.title}</strong>
          <br><strong style="color: #ed6900; font-size: 16px;">${event.description}</span><br/></strong>
         </div>
       </div>
     `;
        }
    });
    popupContent += `</div>`;

    const popup = new maplibregl.Popup({ offset: 25 }).setHTML(popupContent);
    marker.setPopup(popup);
});

/***************************************
 * Animate Sparkle Effect for Lines
 ***************************************/
function animateLineSparkle(layerId) {
    const sparkleFrames = [
        { width: 1, opacity: 0.5 },
        { width: 2, opacity: 0.8 },
        { width: 3, opacity: 1 },
        { width: 2, opacity: 0.7 }
    ];
    let frame = 0;
    setInterval(() => {
        const { width, opacity } = sparkleFrames[frame];
        map.setPaintProperty(layerId, "line-width", width);
        map.setPaintProperty(layerId, "line-opacity", opacity);
        frame = (frame + 1) % sparkleFrames.length;
    }, 200);
}

/***************************************
 * Add Lines to Map
 ***************************************/
lines.forEach((line, index) => {
    const id = `line-${index}`;

    map.on("load", () => {
        if (!map.getSource(id)) {
            map.addSource(id, {
                type: "geojson",
                data: {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: [
                            [line.start.lng - 0.75, line.start.lat],
                            [line.end.lng - 0.75, line.end.lat]
                        ]
                    }
                }
            });
        }

        map.addLayer({
            id: id,
            type: "line",
            source: id,
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": line.options.color || "white",
                "line-width": line.options.weight || 1,
                "line-opacity": 0.7,
                "line-blur": 2
            }
        });

        // Start the sparkle animation (pulse-style glow)
        animateLineSparkle(id);

        // Optional: click behavior
        map.on("click", id, (e) => {
            new maplibregl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(line.popupContent || "")
                .addTo(map);
        });

        map.on("mouseenter", id, () => {
            map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", id, () => {
            map.getCanvas().style.cursor = "";
        });
    });

    // Function to pulse-glow the line
    function animateLineSparkle(layerId) {
        let t = 0;
        const animate = () => {
            const opacity = 0.6 + 0.4 * Math.sin(t);
            const blur = 1.5 + 1.0 * Math.sin(t);

            if (map.getLayer(layerId)) {
                map.setPaintProperty(layerId, "line-opacity", opacity);
                map.setPaintProperty(layerId, "line-blur", blur);
            }

            t += 0.05;
            requestAnimationFrame(animate);
        };
        animate();
    }
});
