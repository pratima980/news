import React, { Component } from 'react'
import Newsitems from './Newsitems';

export default class News extends Component {
  articles = [
    {
        "author": "Antoinette Radford, Elise Hammond, Eric Levenson, Kara Scannell, Emma Tucker",
        "content": "The three-count indictment alleges  Sean Diddy Combs engaged in a persistent and pervasive pattern of physical, verbal, emotional and sexual abuse toward women and other individuals.\r\nThe indictment … [+1266 chars]",
        "description": "Sean “Diddy” Combs was denied bail Tuesday and taken into custody after pleading not guilty in federal court to charges of racketeering conspiracy and sex trafficking.",
        "publishedAt": "2024-09-18T03:49:00Z",
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "title": "Sean ‘Diddy’ Combs denied bail and will remain in federal detention, judge rules - CNN",
        "url": "https://www.cnn.com/entertainment/live-news/sean-diddy-combs-arrested-nyc-09-17-2024/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24255764516185-1.jpg?c=16x9&q=w_800,c_fill"
    },
    {
        "author": "Jonathan Edwards",
        "content": "The CEO of a deep-sea exploration company who piloted the Titan submersible that imploded last year killing him and four passengers had previously crashed a different submersible into a shipwreck, a … [+5076 chars]",
        "description": "OceanGate’s former director of operations testified that Stockton Rush crashed a submersible in 2016 and only gave up control when a tearful passenger screamed at him.",
        "publishedAt": "2024-09-18T02:42:39Z",
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "title": "OceanGate CEO crashed sub years before Titan implosion, whistleblower says - The Washington Post",
        "url": "https://www.washingtonpost.com/nation/2024/09/17/ocean-gate-titan-submersible-hearing/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RO3E7FNPAHKWTXXG54RRG35R3Y_size-normalized.jpg&w=1440"
    },
    {
        "author": "Al Jazeera Staff",
        "content": "On the night of September 17, the Earth, sun and moon will align to create three celestial events.\r\nIn many places, depending on the time zones, people will have the opportunity to witness a harvest … [+4704 chars]",
        "description": "NASA says this month’s full moon will rise on September 17 at 10:35pm EDT (02:35 GMT on September 18).",
        "publishedAt": "2024-09-18T02:35:00Z",
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "title": "Harvest moon, supermoon bring a partial lunar eclipse: How, when to watch - Al Jazeera English",
        "url": "https://www.aljazeera.com/news/2024/9/17/harvest-moon-supermoon-bring-a-partial-lunar-eclipse-how-when-to-watch",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/09/GettyImages-1733777065-1726558012.jpg?resize=1920%2C1440"
    },
    {
        "author": "Caitlin Yilek",
        "content": "Washington — Nearly seven weeks after the Russians handed over Paul Whelan on a tarmac in Ankara, Turkey, the Marine veteran stood on the steps of the U.S. Capitol with a message for other Americans … [+3691 chars]",
        "description": "The Marine veteran was released in August as part of a complex deal with Russia.",
        "publishedAt": "2024-09-18T01:09:53Z",
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "title": "Paul Whelan, freed in prisoner swap with Russia, tells other American detainees: \"We're coming for you\" - CBS News",
        "url": "https://www.cbsnews.com/news/paul-whelan-russia-prisoner-swap-us-capitol-message/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/18/d7705f71-fc56-45f9-91fc-f983b4d7cd43/thumbnail/1200x630/28effdea508f17881b6fdf6ef8c5b92c/img-5011.jpg?v=1736e554a81339b452bb43c01c071a51"
    },
    {
        "author": "Olivia Rinaldi",
        "content": "Flint, Michigan – Former President Donald Trump returned to the campaign trail Tuesday evening in his first public appearance since the second assassination attempt on his life.\r\n\"It's a dangerous bu… [+2985 chars]",
        "description": "Trump supporters said they feel safe attending his campaign rally in Michigan.",
        "publishedAt": "2024-09-18T01:06:31Z",
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "title": "Trump campaigns in Michigan in first appearance since apparent assassination attempt - CBS News",
        "url": "https://www.cbsnews.com/news/trump-campaigns-flint-michigan-first-appearance-since-apparent-assassination-attempt/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/09/18/68786618-c825-4b7a-91bd-8890b74485a5/thumbnail/1200x630/010382bdd985d60c9e86553db86c231d/gettyimages-2171956962.jpg?v=1736e554a81339b452bb43c01c071a51"
    },
    {
        "author": null,
        "content": "Donald Trump has praised an amazing woman motorist who he said tailed an alleged gunman as he made his getaway after an apparent assassination attempt on the former president on Sunday, leading to a … [+2133 chars]",
        "description": "Donald Trump said a woman spotted his would-be assassin while driving, leading to his arrest.",
        "publishedAt": "2024-09-18T00:41:21Z",
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "title": "Trump praises 'amazing' woman who followed suspected gunman - BBC.com",
        "url": "https://www.bbc.com/news/articles/cpw5rk0ewxwo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0d4c/live/d0dcc250-7565-11ef-8c1a-df523ba43a9a.jpg"
    },
    {
        "author": "Cara Tabachnick",
        "content": "Workers removing tree branches near a historic cathedral in Chelm, Poland, unearthed something unexpected when they came upon two children's skeletons in a shallow burial pit where no gravesites are … [+2293 chars]",
        "description": "Two recently unearthed children's skeletons showed characteristics of ancient anti-vampire burials meant to prevent the dead from exiting the grave,",
        "publishedAt": "2024-09-18T00:40:16Z",
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "title": "Remains of decapitated \"vampire child\" found in Poland, archaeologists say - CBS News",
        "url": "https://www.cbsnews.com/news/poland-vampire-decapitated-child-found/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/09/18/47c12137-753b-4208-aabd-9c79b43e0fe8/thumbnail/1200x630/101afcd27b4cdd3fe16cbad9b763bf3f/screen-shot-2024-09-17-at-8-08-20-pm.png?v=1736e554a81339b452bb43c01c071a51"
    },
    {
        "author": "Jeff Benjamin",
        "content": "Yesterday’s release of iOS 18 brought many new improvements and enhancements to the iOS Home Screen. The update includes a few subtle changes but also features fundamental changes to iOS design parad… [+4160 chars]",
        "description": "Yesterday’s release of iOS 18 brought many new improvements and enhancements to the iOS Home Screen. The update includes a...",
        "publishedAt": "2024-09-18T00:24:00Z",
        "source": {
            "id": null,
            "name": "9to5Mac"
        },
        "title": "iOS 18 top features: Home Screen improvements add an impressive level of personalization to iPhone [Video] - 9to5Mac",
        "url": "https://9to5mac.com/2024/09/17/ios-18-top-features-home-screen-improvements-add-an-impressive-level-of-personalization-to-iphone-video/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/iOS-18-Top-Features-Tint-icons.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
    },
    {
        "author": "BASSEM MROUE, ABBY SEWELL, KAREEM CHEHAYEB",
        "content": "BEIRUT (AP) Pagers used by hundreds of members of the militant group Hezbollah exploded near simultaneously in Lebanon and Syria on Tuesday, killing at least nine people including an 8-year-old girl … [+6935 chars]",
        "description": "Hundreds of handheld pagers exploded near simultaneously in parts of Lebanon and Syria, killing at least nine people — including members of the militant group Hezbollah and a young girl. Officials in Lebanon say more than 2,700 were wounded on Tuesday, 200 cr…",
        "publishedAt": "2024-09-18T00:21:00Z",
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "title": "Hezbollah hit by a wave of exploding pagers and blames Israel. At least 9 dead, thousands injured - The Associated Press",
        "url": "https://apnews.com/article/lebanon-hezbollah-israel-exploding-pagers-8893a09816410959b6fe94aec124461b",
        "urlToImage": "https://dims.apnews.com/dims4/default/3ff2e71/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F95%2F36%2Fecb43f66541bd553b49e6723d5ad%2F0d960e3042924c0baf029047fc7cfbe4"
    },
    {
        "author": "",
        "content": "Ryan Leaf knows all too well the backlash that comes with the failures of being a high draft pick. The San Diego Chargers gave Leaf every opportunity to succeed after selecting him No. 2 overall in 1… [+2141 chars]",
        "description": "Leaf defended Young after his benching",
        "publishedAt": "2024-09-18T00:05:00Z",
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "title": "Former No. 2 overall NFL Draft pick roasts Panthers for benching Bryce Young: 'This organization is horrible' - CBS Sports",
        "url": "https://www.cbssports.com/nfl/news/former-no-2-overall-nfl-draft-pick-roasts-panthers-for-benching-bryce-young-this-organization-is-horrible/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/05/22/d5a2af44-8395-43a8-ada8-a6690d3f57bf/thumbnail/1200x675/6caa4f30212b46523f62a5790ebe1367/bryce-young-us.jpg"
    },
    {
        "author": "Sebastian Herrera, Joseph De Avila",
        "content": null,
        "description": "Corporate staffers grumble after e-commerce giant tells workers to be in the office full time starting next year",
        "publishedAt": "2024-09-17T23:37:00Z",
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "title": "Amazon’s Return-to-Office Plans Spark Concern and Debate Among Employees - The Wall Street Journal",
        "url": "https://www.wsj.com/business/amazons-return-to-office-plans-spark-concern-and-debate-among-employees-6273f615",
        "urlToImage": "https://images.wsj.net/im-98030635/social"
    },
    {
        "author": "Axios",
        "content": null,
        "description": null,
        "publishedAt": "2024-09-17T23:31:41Z",
        "source": {
            "id": "axios",
            "name": "Axios"
        },
        "title": "\"Spewing lies\": Harris condemns Trump's \"hateful rhetoric\" about Springfield - Axios",
        "url": "https://www.axios.com/2024/09/17/harris-trump-springfield-ohio-migrants-vance-nabj",
        "urlToImage": null
    },
    {
        "author": "ASSOCIATED PRESS",
        "content": "SEOUL, South Korea (AP) Japans military said Wednesday it detected North Korea test-firing two ballistic missiles, adding to its military demonstrations as tensions with Washington and neighbors esca… [+1324 chars]",
        "description": "Japan&rsquo;s military said Wednesday it detected North Korea test-firing two ballistic missiles, adding to its military demonstrations as tensions grow.",
        "publishedAt": "2024-09-17T23:25:30Z",
        "source": {
            "id": null,
            "name": "WJLA"
        },
        "title": "Japan's defense ministry says North Korea test-fires 2 ballistic missiles - WKRC TV Cincinnati",
        "url": "https://wjla.com/news/nation-world/japans-defense-ministry-says-north-korea-test-fires-2-ballistic-missiles-military-war-weapons-nuclear-bombs-launches-united-states-joe-biden-donald-trump-kamala-harris-kim-jong-un-presidential-election",
        "urlToImage": "https://local12.com/resources/media2/16x9/3888/986/0x66/90/3b99dc2b-446b-41b7-95ec-6769fd804acf-AP24115594222241.jpg"
    },
    {
        "author": "Jelia Hepner, Jessica Patrick, Delaney Eyermann, Carly Haynes",
        "content": "While Potential Tropical Cyclone 8 moved off the Carolina coast on Tuesday, the clean up is only just beginning.\r\nFor some people, it's impossible to leave their neighborhoods, and the process of dra… [+9441 chars]",
        "description": "Carolina Beach received more than 20 inches of rain since Sunday night, resulting in life-threatening flooding and a historic event that happens once every 1,000 years, on average.",
        "publishedAt": "2024-09-17T23:17:05Z",
        "source": {
            "id": null,
            "name": "WRAL.com"
        },
        "title": "State of Emergency declared for coastal counties: Potential Tropical Cyclone 8 dumps more than 20 inches of rain on Carolina Beach - WRAL News",
        "url": "https://www.wral.com/story/state-of-emergency-declared-for-coastal-counties-potential-tropical-cyclone-8-dumps-more-than-20-inches-of-rain-on-carolina-beac/21627081/",
        "urlToImage": "https://images.wral.com/asset/weather/hurricanes/2024/09/16/21627779/Image-10--DMID1-64by3b44k-640x480.jpg"
    },
    {
        "author": "Kaitlin Sullivan",
        "content": "Black women are more likely than white women to die from even the most treatable types of breast cancer, a study published Tuesday in the Journal of Clinical Oncology found.\r\nThe findings, experts sa… [+6177 chars]",
        "description": "Black women are more likely than white women to die from even the most treatable types of breast cancer, new research finds.",
        "publishedAt": "2024-09-17T22:47:54Z",
        "source": {
            "id": "nbc-news",
            "name": "NBC News"
        },
        "title": "Black women are more likely than white women to die of all types of breast cancer - NBC News",
        "url": "https://www.nbcnews.com/health/cancer/black-women-are-likely-white-women-die-breast-cancer-regardless-subtyp-rcna171523",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240917-black-woman-mammogram-se-247p-a56c40.jpg"
    },
    {
        "author": null,
        "content": "[Removed]",
        "description": "[Removed]",
        "publishedAt": "2024-09-17T22:34:09Z",
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "title": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null
    },
    {
        "author": null,
        "content": "The Princess of Wales has carried out her first work meeting since she began cancer treatment earlier this year.\r\nIn another small step on her return to public life, the princess had a meeting on Tue… [+1924 chars]",
        "description": "Princess of Wales continues her gradual return to public life with her first work meeting this year.",
        "publishedAt": "2024-09-17T22:31:35Z",
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "title": "Kate at first work meeting since cancer treatment - BBC.com",
        "url": "https://www.bbc.com/news/articles/c4g92rx60d0o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c0e3/live/ffb40bc0-7514-11ef-b2b6-fb0fab5e97c6.jpg"
    },
    {
        "author": "Amna Nawaz, Kyle Midura",
        "content": "Gov. Mike DeWine:\r\nWell, Fran and I were in schools today. We talked to kindergartners, first graders, second graders, and the teachers.\r\nAnd what the teachers said is, the kids are doing well today,… [+931 chars]",
        "description": "Springfield, Ohio, remains on edge as Donald Trump and JD Vance continue spreading racist lies about Haitian migrants. Throughout the turmoil, Ohio Gov. Mike DeWine has called for calm, sent additional law enforcement resources and condemned hate. Amna Nawaz …",
        "publishedAt": "2024-09-17T22:30:07Z",
        "source": {
            "id": null,
            "name": "PBS"
        },
        "title": "Gov. DeWine urges Trump and Vance to end 'very hurtful' comments about Haitian migrants - PBS NewsHour",
        "url": "https://www.pbs.org/newshour/show/gov-dewine-urges-trump-and-vance-to-end-very-hurtful-comments-about-haitian-migrants",
        "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2024/09/dewine-1024x683.jpg"
    },
    {
        "author": "Melissa Rudy",
        "content": "Resistance to antibiotics has led to one million worldwide deaths each year since 1990, for a total of 36 million.\r\nIt is expected to cause more than 39 million more fatalities by 2050 three per minu… [+6063 chars]",
        "description": "Resistance to antibiotics has led to one million worldwide deaths each year since 1990, and is expected to cause more than 39 million more fatalities by 2050, a new study has found.",
        "publishedAt": "2024-09-17T22:08:00Z",
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "title": "Superbugs due to antibiotic resistance could kill 39 million people by 2050, large study finds - Fox News",
        "url": "https://www.foxnews.com/health/superbugs-due-antibiotic-resistance-could-kill-39-million-2050-large-study-finds",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/scientist-bacteria-petri-dish.jpg"
    },
    {
        "author": null,
        "content": "[Removed]",
        "description": "[Removed]",
        "publishedAt": "2024-09-17T21:58:21Z",
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "title": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null
    }
];
  constructor(){
    super();
    console.log('iam constructor');
    this.state={
      articles:this.articles,loading:false

    }
  } 
  async componentDidMount() {
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=ca5a3752a60f4102970776e2a8a9d1ef";
    let data= await fetch(url);
    let parseddata= await  data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles})
  


    
  }
  
 

  render() {
    return (

      <div>
       <div className="container bg-info">  
      
        <div className='row'>
        {this.state.articles.map((element)=>
          { return  <div key={element.publishedAt} className="col-md-3 card  mx-3 my-3" style={{width: "18rem"}}>
            <Newsitems title={element.title} description={element.description}url={element.url}imageurl={element?element.urlToImage:"https://deadline.com/wp-content/uploads/2024/09/mr-beast-march-2024-getty.jpg?w=1024"}></Newsitems></div>})} 
         
        
        </div>
        </div>
       </div>
    )
  }
}
