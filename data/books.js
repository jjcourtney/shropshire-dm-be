const books = [
    {
        card: "Ace",
        subtype: "fiction",
        type: "books",
        name: "The Adventure of Fitz Bo-Durden",
        desc: ["A self-published work based on totally original character Fitz Bo-Durden (DON’T STEAL) and his awesome adventure in which he is the best at everything. He’s so misunderstood but everyone who meets him loves him, and he wins every fight with his two swords and wicked cool wolf pet who he can also turn into a wolf if he wants to and they can be wolves together.",
            "The book is packed with romance, adventure, hot babes of every gender, wicked cool action fights in which Fitz always wins in the coolest way ever, and romance. Also he’s secretly a vampire and has a birthmark that says he’s destined to be king of everything."
        ]
    }, {
        card: "2",
        subtype: "fiction",
        type: "books",
        name: "Barista Club by Lyra Marringold",
        desc: ["A dystopian tale of bureaucracy and blandness in a future where magic is gone and only gold rules. The book is popular with teenagers who associate with the team of young protagonists. It has been widely condemned by most religions for espousing a dangerous fiction.",
            "Reading the book and learning the essential plot beats grants advantage to Charisma checks when trying to get information out of teenagers."
        ]
    }, {
        card: "3",
        subtype: "fiction",
        type: "books",
        name: "A Layer of Truth",
        desc: ["A recent publication of the much lauded parody news pamphlet, which presents fictitious and satirical articles and news stories. The publication rose to fame after a spate of the articles getting into the daily-reads from a variety of town criers across the nation of Eblayla. Some notable stories have included:",
            "Parrots to archive town crier announcements",
            "Queen paves the way for impoverished nation to continue being impoverished",
            "Maiden whisked away by kobolds says “I’ve never been happier”",
            "Archdeacon of Helm actually a slaad",
            "Local barbarian wondering if he could have maybe “talked things out”",
            "Alchemist fraud accidentally turns self gold by fooling Kuotoa",
            "“Invisible clothing all the rage during upcoming season” say fashion experts"
        ]
    }, {
        card: "4",
        subtype: "fiction",
        type: "books",
        name: "Sherrinford Hope and the Ghastly Affair at Samuel Towers by Scarlet McCroy",
        desc: ["A crime drama for older readers, the titular character has appeared in a vast array of books penned by three different authors throughout the years. This is the first of Scarlet McCroy’s efforts following their stint of writing younger teen crime. Stalwarts of the series are disappointed in the toothlessness of the drama and crime, and the emotion that has been unnecessarily pumped into the character “out of nowhere”.",
            "Most maddening of all is that the publishers claim that the book ends on a cliffhanger.",
            "Scarlet McCroy wrote a conclusive ending. She swears that the publisher lost the last few pages and are denying it. Any player who becomes embroiled in the conflict between author and publisher could become immortalised in the book series of a century."
        ]
    }, {
        card: "5",
        subtype: "fiction",
        type: "books",
        name: "A Loxodon For Midwinter, a Novella by Veedra Vanash",
        desc: ["An unabashed and shameless scandal-filled romp detailing a heady love affair between a noblewoman of fictional Utrana, her Loxodon lover, and his betrothed woodsman. The triangle is fraught with emotion, and overburdened with “trunk” based innuendos.",
            "A player who reads the book can add 1d4 to any Charisma check made to interact socially with loxodons once per interaction. Once the d4 is expended, both parties are immediately embarrassed by the exchange that has taken place, whether it be positive or otherwise."
        ]
    }, {
        card: "6",
        subtype: "fiction",
        type: "books",
        name: "The Book Hamster by Tiffany Proudwhistle",
        desc: ["A children’s tale of a hamster that is apparently made of folded pages torn from a book. It will eventually learn that the library in which it lives is not its home, it is a nest, and once it has read enough books, its family come down from space and take it to its real home. The hamster is in fact a literary giant space hamster, a breed of giant space hamster with preternatural intelligence and immunity to magic.",
            "The reader now knows about giant space hamsters and can never not know about them. They can choose to create an infant version as a familiar if they are able to cast the spell."
        ]
    }, {
        card: "7",
        subtype: "fiction",
        type: "books",
        name: "Laboratory from Beyond Death",
        desc: ["A non-linear narrative in which the reader takes the role of the protagonist and makes choices as to how the story ought to progress. It seems a third of the pages end in the tragic death of the reader.",
            "The book has but one magical property, and that is that the page with the safe and successful ending is invisible until the player successfully navigates to it. It contains an address to which one can send a short letter detailing their adventures and giving a name and address. The publishers deliver a token of success within the week, and the reader is invited to an elite club of “completers” of Laboratory from beyond Death, who are all highly intelligent and well connected NPCs who will act as valuable allies moving forward."
        ]
    }, {
        card: "8",
        subtype: "fiction",
        type: "books",
        name: "To Draw No Swords by Kymil Vayarus",
        desc: ["Three stories:",
            "The tale of a pacifist navigating a warzone and accomplishing great deeds using hand-to-hand combat alone. A player who reads this tale gains 1 ki point above their maximum permanently.",
            "A story from the perspective of a blade abandoned by their last wielder, and how they perceive the passage of time and the changing world. The reader gains a permanent +1 to attack rolls using sentient weapons and +1 to AC against sentient weapons.",
            "The diary of a solitary warrior who has revoked violence and now fights to ensure that no blade is ever drawn again in anger. The reader gains a bonus of 1d4 to initiative rolls, and they gain a surprise round each combat in which they are not surprised which they may not use to make an attack.",
        ]
    }, {
        card: "9",
        subtype: "fiction",
        type: "books",
        name: "Faerie Feasts, Fey Fare, and Fodder of the Folk, by Phineas Frolic",
        desc: ["“Unscramble 3 tremble bird eggs…”",
            "An entirely fictionalised cookbook that portrays the author as having visited the feywild and been taught to cook while there, and bringing some of the safer recipes back to the real world. Any feywild scholar or resident can quickly and easily identify the book as a work of (albeit entertaining) fiction. It lists non-existent plants and animals and methods of cooking that are simply fake and probably unsafe.",
            "A careful analysis of the artwork in the book read in a particular order gives an actual, useable recipe that is nutritious, delicious, and capable of sustaining a party with minimal access to ingredients for a full day.",
            "On the final page are the words “Just Add Water”, and if the book is intentionally soaked it becomes cake. This has lead to the book being incredibly rare and valuable to collectors."
        ]
    }, {
        card: "10",
        subtype: "fiction",
        type: "books",
        name: "Dhampir: The Masked Party, a novel by Hugo Rasithane",
        desc: ["The tale is told from the perspective of a manservant piecing together the stories of his former master, a world travelling noble and adventurer whose journeys have seen him entangled with an immortal murderer and his villainous band of half-breeds, obsessed with purifying the world and putting an end to decadence and destruction.",
            "The book mentions a secretive temple, the Temple of the Cursed Fang, in a far western mountain range, in which there is a pit that magically converts mortals into half vampires that can walk unfettered in daylight.",
            "The book was formerly published in a pop-culture monthly publication chapter by chapter across many months, as such it is regarded as “pulp schlock” and not taken seriously by many, with the exception of a cult following who seek to find the pit, and the handful of people in the world who know the truth, that Hugo Rasithane is a necronym, and that he is in truth, a vampire."
        ]
    }, {
        card: "Page",
        subtype: "fiction",
        type: "books",
        name: "Mind Over Motive by Vincel Bandera",
        desc: ["The tale tells of a man convicted of a murder he swears he committed unwillingly, unknowingly, and completely without intent or control of his body. He says he was puppeteered by some outside force. Mages can find no trace of enchantment, witnesses claim that he was under full control, and only one intrepid alienist doubts the common belief that the man is lying.",
            "Anyone who reads this book has advantage on checks made to recall lore about illithids and related creatures.",
            "The story ends in a cliffhanger in which it appears that the alienist may have lost control of himself and is now subject to some strange external puppetry."
        ]
    }, {
        card: "Knight",
        subtype: "fiction",
        type: "books",
        name: "Honour for the Blind Hobgoblin",
        desc: ["A collection of parables and fables that each end on a piece of significant military advice. The book was written by a group of military strategists with a flair for the dramatic. Tales include:",
            "The Pebble in the Stream",
            "A Dragon’s Ambition",
            "The Grouse and the Peacock",
            "The Little Mule that Wouldn’t",
            "The Cuckoo and the Rabbit",
            "Nine Ways to Skin a Cat",
            "There is a framing device around each parable, in which an old blind hobgoblin teaches his younger protege.",
            "The reader can add 1d6 to any Wisdom or Intelligence based checks when in a warfare situation."
        ]
    }, {
        card: "Queen",
        subtype: "fiction",
        type: "books",
        name: "Ionised Democracy by G. Quatos Phipps",
        desc: ["A politically charged story set in a world where magic has caused a near-apocalyptic events and the world relies on the power of alchemy for survival, it fuels industry, it grows crops,purifies water, and it serves as the basis for medicine. People generally cooperate and get along in this new world.",
            "Near to the protagonist's home is a place of lingering magic which occasionally causes a mental sickness, driving people to acts of violent madness. A renowned creative mind seeks to harness the power of an ancient magical device that will drive away those afflicted by the malady, and put him into a position of power among the people, but doing so invites a return of the apocalyptic forces that destroyed the world.",
            "Anyone who reads this book can add 1d4 to any check made with alchemy supplies, any arcana check made to identify magical effects, and some strong opinions about the misuse of magical power and distribution of mages in political positions."
        ]
    }, {
        card: "King",
        subtype: "fiction",
        type: "books",
        name: "Star Crossed, or Grades of Shade, by R.T. Bibbington Esqe",
        desc: ["A tale of romance cast upon the sea of stars, piracy, strange and terrible sights to behold, the dead come to life and desperate for a sense of emotional connection, dreams springing to reality in unfettered and often unforeseeable ways. The protagonist exchanges their soul for that of a dead person adrift in the astral sea, who uses their newly acquired life to embark on a romantic entanglement.",
            "The book, while incredibly unhelpful in matters of love and necromancy, was apparently a labour of research into the astral sea, and any creature who reads it can reroll a failed check to recall lore about the astral sea once per day.",
            "You can also safely and quickly navigate to any of the following locations:",
            "A city encased in a geometric mote of water, its spires jut out here and there like a fairytale castle submerged in a three dimensional lake.",
            "A drifting glass prison, sealed by a monstrously large cork, containing an astral kraken bound with holy script.",
            "A pair of mirrored islands with intense abilities to allow communication between the living and the dead, commonly referred to as “Soul’s Meet”.",

        ]
    }, {
        card: "Ace",
        subtype: "artisticCollections",
        type: "books",
        name: "“Me” by Xodhash the Unblinking",
        desc: ["A collection of terrible poetry, most of which are rhyming love-letters, mis-counted sonnets, and suggestive limericks, all directed to Xodhash, all apparently written by Xodhash, all of which are awful.",
            "The works can be used as part of a casting of Antipathy to cause creatures to be repulsed by the reader, but can also be used to flatter Xodhash should it ever be encountered. Once a few poems have been recited from memory and a successful deception check is passed, Xodhash will believe anything a creature tells it, and will be more likely to aid and assist the creature where possible.",
            "“And in",
            "the verse",
            "an inkling",
            "Perverse",
            "my love",
            "a curse",
            "it's ending",
            "a hearse",
            "for I",
            "Alone",
            "Can take",
            "the throne",
            "of my lovely love”"
        ]
    }, {
        card: "2",
        subtype: "artisticCollections",
        type: "books",
        name: "The Art of Plagiarism by Solus R. R. Windborne",
        desc: ["A book filled with scraps of artwork compiled into collages that themselves create new and beautiful pieces of art. Arguably they are greater than the sum of their parts, and yet there are those who have heavily critiqued the book, saying it is itself, worse than anything it stole from.",
            "One of the images contained within this book has no other existent copies, and the only way to view most of the original image would be to dismantle this book, and recreate the original from pieces. This newly recreated portrait contains many clues to the subject’s past."
        ]
    }, {
        card: "3",
        subtype: "artisticCollections",
        type: "books",
        name: "Self Portraits of a Prince (unknown)",
        desc: ["Beautiful images of an unknown royal that claim to have been done by the prince himself. Scholars have agonised over the work, trying desperately to identify telling facial features and artistic choices in the hopes that the artist has revealed who they are, or at least given some hint to their lineage. Of greatest interest has been the signature, a strange symbol combining some light arcanography with traditional scientific and alchemical symbols.",
            "The shrewd, those who dabble in forbidden scholarships, and the darkly knowledgeable will identify the artist with relative ease, Graz'zt, demon prince of decadence and self indulgence (among other things). The book contains many of his secrets that he has been willing to lay out for the taking, only so long as readers are willing to appreciate his ingeniousness and his beauty."
        ]
    }, {
        card: "4",
        subtype: "artisticCollections",
        type: "books",
        name: "Bickerbrush the Incoherent’s Fey Tomfoolery",
        desc: ["This has all the structure and form of a book of jokes but none of them are funny to a mortal creature. Anyone of fey origin or who has been raised in the Feywild finds all of the jokes to be savage and hilarious.",
            "Q: Why was the baby crying?",
            "A: [waggles a human tongue around]",
            "Q: How do you make a baby human dance?",
            "A: Depends, have you got any string?",
            "Q: Why did the chicken cross the road?",
            "A: [a human turned into a chicken thrown at the listener]",
            "Q: How do you make cold iron?",
            "A: [Stab the nearest person to death]",
            "Q:How many dandelion seeds does it take to wake a bear?",
            "A: Spring",
            "Q: What do you get when you cross a Dragon with an Owlbear?",
            "A: [Lies on the ground and sobs uncontrollably for an hour straight]",
            "Q: Why was the mermaid crying?",
            "A: [Transform into a pillar of sand]",
            "Q: How is a mortal like a tree?",
            "A: [Claws way out of ground screaming]",
            "Q: Why?",
            "A:",
            "A small child is lost in the forest. Hilarious!"
        ]
    }, {
        card: "5",
        subtype: "artisticCollections",
        type: "books",
        name: "The Beyond’s Window",
        desc: ["A series of popular works printed with erratic and nonsensical patterns. Viewed properly by adjusting one’s focal point (according to the instructions inside the cover), a secret image can be viewed.",
            "Having truesight makes it impossible to use this book, otherwise a creature with Wisdom 13 or higher is required to view the images, some require darkvision.",
            "When a player discovers a “The Beyond’s Window” volume roll 1d20. On a 1, the volume contains an image that gives the viewer one form of indefinite madness. On a 20 the image may be a treasure map, or an anatomy of a monstrous foe that the reader is currently facing."
        ]
    }, {
        card: "6",
        subtype: "artisticCollections",
        type: "books",
        name: "The Collected Works of Falleda (Transcribed and Annotated)",
        desc: ["A collection of bardic songs from a locally renowned bard. Anyone who researches the bard further will discover that the author and publisher created the book without her knowledge or permission, and that the creation of the title was the basis of a murder investigation.",
            "The songs themselves collate folktale, civic unrest and parody, alongside many personal experiences all woven into the subtext. Falleda, it seems, was a master at double meanings, and a deeply troubled soul who imparted a great deal of meaning into all of her works.",
            "Bardic readers can add the works to their repertoire, guaranteeing a free drink for themselves and up to 10 creatures in any tavern, and in certain regions a free place to stay, but in doing so will have a 1% chance of becoming haunted by the author, whose name has been stricken from every copy."
        ]
    }, {
        card: "7",
        subtype: "artisticCollections",
        type: "books",
        name: "The Iron Anthology, collected by Hendrick P. Milnon-Johnstone",
        desc: ["A collection of dwarvish poetry, much of which written in the form of working songs, things to be recited in the foundry and production lines. Pacing is rhythmic and steady throughout.",
            "Certain poems, while recited to the sound of carefully paced hammer and steel, are used to drive away creatures that would emerge from the endless dark far below where most dwarves will dig. The poetry is known to be anathemic to illithids and most of their creations.",
            "A Tale of Nails",
            "Iron, Blood, and Iron",
            "Hammer, Mine",
            "Locked in Gold",
            "The Halls of Goodwin",
            "The Blood of the Brand"
        ]
    }, {
        card: "8",
        subtype: "artisticCollections",
        type: "books",
        name: "A Curse of a Feather by Doot (clarinet noise)",
        desc: ["An opera written by and to be performed by kenku and kenku alone. Each performer must “harvest” the sounds necessary for their act anew, and cannot steal from other performances or else they are cast from a high tower and told to fly.",
            "The story is that of the Sun and the Moon, a love story that can never be resolved for the sake of the world of the living that needs them to fulfil their roles. The story is a kenku remastering of a dragon Creation Myth, the tale of how dragons came to be at the dawn of the world."
        ]
    }, {
        card: "9",
        subtype: "artisticCollections",
        type: "books",
        name: "An Abandoned Notebook",
        desc: ["Not a published work, but nevertheless this article appears in various forms in every library in the cosmos, a simple, plain ruled notebook covered in erratic scrawls and scribbles.",
            "Once found, it will lead the reader to discover similar and familiar scribbles throughout the library, on desks, graffitied onto signs, carved onto shelves. The form a trail of breadcrumbs that lead to a hidden, quiet corner, piled high with the scribbles of a madman, that reveal the existence of a celestial creature hidden in the library. Once the celestial is found, they can offer transport to a player group into any large book repository in the cosmos."
        ]
    }, {
        card: "10",
        subtype: "artisticCollections",
        type: "books",
        name: "The Picture Encyclopaedia of Apoan Flora from The Academy of Brenakre",
        desc: ["This work is primarily an artistic showcase, depicting the various plantlife of the continent of Apoa in stunning and (currently) unrivalled detail. Each piece is carefully labelled and accompanied by a simple yet essential collection of facts about each plant.",
            "While on the continent, a reader can add 1d6 to all ability checks made to gather and identify plants for a specific purpose."
        ]
    }, {
        card: "Page",
        subtype: "artisticCollections",
        type: "books",
        name: "Journey’s Beginning from the Studio School at Bronderfeld",
        desc: ["A routinely published work, released once every three years, collating the artistic prowess of each new intake of students at the Studio School. The book features the works of the masters of tomorrow.",
            "Reading the book inspires one in every ten readers to start their own journey of discovery, beginning the process of learning a new subject or skill. 1 year after reading, the reader gains proficiency in a skill or artisans tool of their choosing."
        ]
    }, {
        card: "Knight",
        subtype: "artisticCollections",
        type: "books",
        name: "Global Textiles",
        desc: ["A book that is part paper and part fabric and textile samples, detailing a variety of fashion from around the discovered world. Using the book any creature with Dexterity 15 or higher can craft clothing suitable for any nation, granting advantage on any check made to pass as a native of that nation, and +1d6 to any survival check made to endure the weather.",
            "Any creature with a Dexterity of 13 or lower, treats their Dexterity score as 13 when making ability checks to sew."
        ]
    }, {
        card: "Queen",
        subtype: "artisticCollections",
        type: "books",
        name: "War in Absentia by Fabien Dalcosta",
        desc: ["This book contains watercolour depictions of ruins that mark the progress of a war that ended 150 years ago. The ruins, while depicted accurately, are couched in a surrealist landscape, not fearful or terrible to behold, but in some way significantly strange. For example, the crumbled Tower of Tak’thar is depicted on the back of a colossal hippo, and Fort Imbram seems to be at once on fire and underwater.",
            "Astonishingly, the artist has eluded strongly to puzzle solutions and hazards that are faced within the ruins, and each and every one is an adventure site. Dalcosta was an adventurer themselves, and their works celebrate their life of exploration. To find their last work would mean finding their corpse in the final dungeon they chose to delve."
        ]
    }, {
        card: "King",
        subtype: "artisticCollections",
        type: "books",
        name: "Dzudze Delakarovy: Nightmare Artist",
        desc: ["Print recreations of the finest works by Dzudze Delakarovy, supposedly a master of the surreal, creating images of people wildly distorted that he claimed were the images that the subjects saw in themselves, and that in his work he was revealing the psychology of his models.",
            "It would be revealed after Delakrovy’s death that he took models and physically distorted them through torturous acts of magic, twisting their flesh, burning them, petrifying them, and in more than one incident, eating them in whole or in part.",
            "Studying the artwork will ultimately lead to the discovery of Delakrovy’s phylactery, and the means by which it may be destroyed."

        ]
    }, {
        card: "Ace",
        subtype: "textbook",
        type: "books",
        name: "The Mutability of Goblins, Markz, Grunch’k’Thall, and Slougher",
        desc: ["Roughly two thirds of an exploratory study into how the dietary habits of lower goblinoids directly impacts their physical shapes. The initial premise begins quite sensibly, detailing how a fruit based diet compared to meat, how different meat sources encourage the existence of certain traits, and how magic directly impacts aspects of the goblin society, even without the presence of a spellcaster in a clan.",
            "The study ends abruptly and in a bloodstained page (which has remarkably been duplicated in multiple reprintings) in which the researchers (Markz, Grunch’kThall and Slougher) are experimenting with feeding aberration pieces to goblins, such as beholder eyestalk, nothic meat, and the reclaimed tadpoles of illithids."
        ]
    }, {
        card: "2",
        subtype: "textbook",
        type: "books",
        name: "Bron-delights, a Pastry Tourist’s Guide to Bronderfeld by Ulpher Burrfoot",
        desc: ["A directory of pastries and sweet goods from Bronderfeld, a kingdom not renowned for its bakery scene but nevertheless offers a vast array of choices and flavour experiences, from sweet and fruited breads, the flakier breakfast offerings. Bronderfeld has meagre native agriculture, but prides itself on what it can do with imported goods.",
            "Certainly if the name Bronderfeld were mentioned, pastry would not be the first thing considered, but if you asked what a Bronder ate for breakfast, everyone from the Split Peak to the Gilded Coast.",
            "Many of the pastries have shibolethic names, meaning that to pass oneself off as native, you would have to know the best way to pronounce Accillette (ax-ill-et/axil-ay/achilette) or Rook’s Eye (rooksy)."
        ]
    }, {
        card: "3",
        subtype: "textbook",
        type: "books",
        name: "The Phenomena of Sorcery, Diethild et al",
        desc: ["The author seemingly had a compelling theory that tied the birth of sorcerers to the migration of elder elemental creatures such as the phoenix. They failed to conclusively prove their idea, but raised heavy implications about the relationship between elementals and sorcery, dragons, and the seasons.",
            "A sorcerer who spends their time studying this book can recover 1 metamagic point each time they reduce an elemental creature to 0 hit points. Furthermore, if the sorcerer is level 10 or higher they can cast Conjure Minor Elementals once per day without expending a spell slot."
        ]
    }, {
        card: "4",
        subtype: "textbook",
        type: "books",
        name: "Collected Journals of the Annarad Expedition",
        desc: ["A transcribed collection of journals recovered from the wreck of the ill-fated Glorious and the handful of discovered camps on the frozen continent of Annarad. The journals are a century old, remarkably preserved, and copied by dedicated historians for posterity.",
            "Readers will learn the following about Annarad:",
            "Monstrous inhabitants include ice worms, ancient golems, and polar werebears.",
            "Shelter is best found by digging into the snow rather than claiming naturally formed spaces.",
            "Fire attracts predators.",
            "Killer whales are especially potent hunters, and you are never far enough away from the water."
        ]
    }, {
        card: "5",
        subtype: "textbook",
        type: "books",
        name: "A Heuristic Analysis of the Barnacle by Bugle Harwin",
        desc: ["Seemingly a simple biological text with a small chapter to aid in ship construction and cleaning, hidden within certain chapters are alarming and chilling references to unique species and individual barnacles that may be of tremendous concern:",
            "An entire island that proved to be a single large barnacle that consumed any creature that attempted to land on it. A tribe lives on its shell and hurls sacrifices into its tendrils.",
            "A colony of psychic barnacles that cling to crustaceans and use them as a distribution method a-la cordyceps fungus.",
            "A mysterious form of undeath that afflicts barnacles who then go on to pass the curse onto larger and larger creatures such as sharks swimming close enough for the barnacles to reach."
        ]
    }, {
        card: "6",
        subtype: "textbook",
        type: "books",
        name: "Millinology by Titifer Chapeaux",
        desc: ["A book on hats, the study of hats, hat ornamentation, and the sheer depth of field of study of hats and headwear. The book is preposterously long, unnecessarily pompous in its phrasing and self-importance, and conveys that the author may either be an arrogant jerk or desperate to justify his life’s study by whatever absurd methods he could.",
            "However, upon a full study of the book, a reader of Intelligence 15 or higher can immediately identify magical headwear of any kind without the need of a spell or ability check. The ability to identify such items also allows the reader to spot a cursed item on sight, and to be able to convey a fragment of the lore of the item as if via the spell Legend Lore."
        ]
    }, {
        card: "7",
        subtype: "textbook",
        type: "books",
        name: "A Catalogue of Future Events, as yet unwritten by Aragi Dalwimple",
        desc: ["This book contains some maddeningly non-specific accounts of events that have yet to take place, such as the death of Andrew Talvern, the disappearance of the nation Klonkaminkus (as yet unfounded), and the King who would forbid Up. The predictions contain sufficient detail to be unmistakable as they occur, and impossible to deny or misinterpret, but contain insufficient information about when they may occur.",
            "The reader gains incredible insight into the future, and begins foreseeing signs of the founding of Klonkaminkus and the coming of Andrew Talvern in everything. (gain the flaw “Sees prophecy in random places”)."
        ]
    }, {
        card: "8",
        subtype: "textbook",
        type: "books",
        name: "Observable Anatomy of the Dragonborn by Aberforth Briganton, Marquis of Ebaladon",
        desc: ["The book presents itself as a medical text but rapidly degenerates into a series of presumptions, poorly conceived notions, and conjectures that any dragonborn would find insulting. Later chapters describe anatomy that is simply guessed at, derived from vivisections made on unwilling and illegally obtained bodies. It is littered with historical inaccuracies and misattributed quotes.",
            "Anyone who reads the book, takes 1 year of time, and succeeds on three successful checks using arcana, history, insight, investigation, medicine, or persuasion can publish a book that corrects many of the mistakes found within, earning a passive income of 1000GP a year, and the permanent enmity of Aberforth Briganton, who is a human archmage with proficiency in medicine and upsetting dragonborn."
        ]
    }, {
        card: "9",
        subtype: "textbook",
        type: "books",
        name: "Manifesto of the Agnomstic Party",
        desc: ["Policies laid out by the manifesto include:",
            "Lawful goodness and the traits of honesty and pacifism",
            "Equitable distribution of magical power among and for the people",
            "Staunchly against the integration of gnomes into civilised society.",
            "A player who reads and fully understands the manifesto gains advantage on insight checks made in the process of running for political office."
        ]
    }, {
        card: "10",
        subtype: "textbook",
        type: "books",
        name: "The Sleeping Titan: A Record of Tarrasque Events, by Ikker Pennet",
        desc: ["A chronological record of all known events concerning the Tarrasque, starting with those that are speculated, building up to the most recent and well recorded and documented. The book contains a fully researched appendix referencing works on the subject of the apocalyptic beast.",
            "Readers gain advantage on any ability check concerning the Tarrasque."
        ]
    }, {
        card: "Page",
        subtype: "textbook",
        type: "books",
        name: "Polymorphism and Retaining the Self, by Goshan the Erstwhile",
        desc: ["The book contains many helpful guides on retaining ones mental capacity and wit when transforming into a “lower” beast. When a person who has spent a full day studying this book polymorphs, either by choice or against their will, their Intelligence and Charisma scores cannot be reduced to less than 7.",
            "A more thorough study can reveal comprehensive descriptions of creatures that are either incredibly exotic or long extinct. When you polymorph or change shape (such as via wildshape) you can assume one of the following forms:",
            "Tyrannosaurus",
            "Parrot (raven)",
            "Blink dog",
            "Armadillo (giant rat with +2 AC)"
        ]
    }, {
        card: "Knight",
        subtype: "textbook",
        type: "books",
        name: "Minor Lineages, of the Gainyth Dynasty",
        desc: ["A book of heraldry and family trees for a wide variety of noble houses, existent and defunct in the former Gainyth Dynasty, complete with a physiognomy, detailing common facial traits and physical appearances that pass through each family. While many retain their houses and holdings under the new regime, many have faded into obscurity.",
            "The book may be useful to identify the “targets” of a mysterious plague afflicting only people with epicanthic folds.",
            "It may also prove useful in identifying the family members of a local criminal gang who retain certain airs and graces that have held since their days in court. They also use a particular symbol to mark their territories, something drawn from their ancient family heraldry."
        ]
    }, {
        card: "Queen",
        subtype: "textbook",
        type: "books",
        name: "The Druidic Faiths and the Powers they Demonstrate, Historical Department of Pumblebridge University, Broderfeld",
        desc: ["A well researched document compiled by various scholars from PUB studying the druids of the continent, the clans and tribes they have formed, the so-called ley-lines and the magic abilities that only those in the natural religions can call upon, such as bonding with animals, and causing rampant plant growth.",
            "Druids who read this book can choose any terrain from the Circle of the Land and immediately gain access to that terrain’s spell list, which is always prepared for them and does not count towards their preparation limit.",
            "A non-druid reading this book can gain the druidcraft cantrip. A ranger reading this book can instead choose to gain two druid cantrips of their choice, and a 1st level spell that they can cast once per day without a spell slot.",
            "The appendix begins halfway through the book."
        ]
    }, {
        card: "King",
        subtype: "textbook",
        type: "books",
        name: "Questions for the Noble Theologian, by Troistar the Gracious",
        desc: ["The book is a philosophical text containing a vast number of questions, each one heading a page and followed by a deep inquiry to the nature of the question, definition of terms used, and the crux of the inquiry and why it may never be resolved.",
            "A cleric or paladin reader may spend 30 days with the book, at which point they must succeed on a Wisdom save (DC 20), if they do, they can now gain power independent of a deity, and can choose to change their domain/oath now, or again by spending 24 hours in meditation and repeating the save.",
            "Failing the saving throw by 5 or more results in an existential crisis, and gaining a form of indefinite madness, and 1d4 points of Stress."

        ]
    }, {
        card: "Ace",
        subtype: "manuals",
        type: "books",
        name: "Surviving To The Last, a Desert Island Cookbook by Bimblespud Nimptydink",
        desc: ["Nimptydink is currently serving 5 consecutive life sentences in an undisclosed jail cell. The profits of his cookbook/survival journal go to upkeep of his security, and keeping him off the gallows.",
            "The contents of the book begin with the story of how he was stranded with five companions on a deserted island, and goes into tremendous detail on the herbs, vegetation, and general inedibility of it all. The second chapter begins with a recipe for human, including a fish oil base that allows for greater flavour and preservation. The book continues in this fashion, with an ever decreasing number of companion characters, and no explanation beyond the recipes as to their fate.",
            "Perks of reading the book include a greater capacity for eating sapient species, survival on a desert island, and a fresh array of ideas for executing sneak attacks."
        ]
    }, {
        card: "2",
        subtype: "manuals",
        type: "books",
        name: "Ventriloquism, Conversation for One by The Sensational Dimblethorp and Chip",
        desc: ["An instructional guide on ventriloquism with puppets and props that can take anyone from a beginner to an expert within 1 week of reading. A character can add their proficiency bonus to performance checks made to use ventriloquy unless they already have expertise. They can also add the Magic Mouth spell to their spell list, and treat it as though it were always prepared.",
            "The book is littered with personal notes and anecdotes. An insight check that does not roll a natural 1 notes that the author wrote the book as a cry for help. If the check rolls a 15 or higher they may discover the identity of a serial killer in Ebaladon, a ventriloquist and puppet duo, but NOT Chip, never Chip, Chip is a good boy, and would never harm a soul."
        ]
    }, {
        card: "3",
        subtype: "manuals",
        type: "books",
        name: "Formal Signature and the Penmans Etiquette, Quail-Not-At-Temptation Throgmorton-Wesselby",
        desc: ["A very pompous and pretentious book that overly dramatises the importance of handwriting when presenting oneself formally to a figure in authority. In reading the book, one can practically hear the voice of the author, sneering and condescending every effort to put pen to paper.",
            "A creature who spends time studying the book has advantage on any sleight of hand or forger’s tools checks made to copy handwriting or signatures."
        ]
    }, {
        card: "4",
        subtype: "manuals",
        type: "books",
        name: "Underhandedness for Fun and Profit",
        desc: ["This is a simple and understandable guide to starting a business in the first chapter, but rapidly becomes a catalogue of potential and semi-legitimate scams to pull on customers, and by the end of the book is a detailed guide on getting away with crimes.",
            "Reading the book gives any reader with a bounty on their head a way of evading the impact of the law, so long as they have the capacity to pay their bounty (they need not spend any money to do so, and have a 5% chance of making a profit as they evade the law)."
        ]
    }, {
        card: "5",
        subtype: "manuals",
        type: "books",
        name: "Xotli Darkblood’s Edible Menagerie",
        desc: ["A book transcribed in the author’s own handwriting (not great but legible) details how to prepare meats from a vast array of terrible monsters, rendering even the most inedible beasts safe fodder for travelling adventurers. Recipes include:",
            "Mimic gumbo",
            "Otyugh flanks (without the diseases)",
            "Pulled barbecue wyvern",
            "Yeti tartar",
            "Troll broth hangover cure (warning, induces extreme sobriety)",
            "Abolethic Sushi",
            "Black Pudding"
        ]
    }, {
        card: "6",
        subtype: "manuals",
        type: "books",
        name: "Dowd Undyne’s Surviving an Extra-Planar Calamity",
        desc: ["Dowd Undyne is a legendary traveller of the planes, once an esteemed wizard, he traded in his pointy hat and robes for more rugged apparel when he took to the sea of stars and explored the cosmos at large. His father was a spearfisher who was eaten alive by a dragonturtle, now Dowd aspires to live until a more dramatic death offers itself to him. His mother was a witch who was burned alive, a woman to whom he ascribes his fascination with the planes of existence.",
            "Dowd has survived a vast array of calamities, various end-of-world scenarios, minor apocalypses, and ragnarok type incursions, and has walked away scott free from all of them. What the intuitive and insightful reader will notice is that the book contains little practical advice, and in fact many of Dowd’s escapes were due to pure, unrefined luck than any kind of skill (although skill he does have).",
            "Within the pages of the book, Dowd has inadvertently tipped off perceptive players to the existence of safe houses, hideouts, and bolt holes that he has scattered across a thousand planes (as yet undestroyed) where he goes to replenish, refuel, and hide. There are signs to watch for, and secret entrances to small stashes he has hidden around the universe."
        ]
    }, {
        card: "7",
        subtype: "manuals",
        type: "books",
        name: "The Derision Collection by [author]",
        desc: ["A selection of works detailing how to adopt one of the archetypal adventurous careers. Titles include but are not limited to:",
            "Turning your vanity into a business model (bard)",
            "Monetising angst (blood hunter)",
            "So you failed at everything else? (fighter)",
            "Weaponising your own arrogance (paladin)",
            "Enduring the wilderness/monetising your homelessness (ranger)",
            "So you lucked into magic? (sorcerer)",
            "Securing a patron to replace the father that ignored you (warlock)",
            "Academia for the terminally boring (wizard)",
            "Anyone who studies one of these books may choose to multiclass into the relevant class whether they meet the prerequisites or not."
        ]
    }, {
        card: "8",
        subtype: "manuals",
        type: "books",
        name: "Pain, Politics, and the Poisons That Guide Them by [author]",
        desc: ["This guide includes only a handful of actual recipes for poison creation (as the distribution of such knowledge is highly controlled) but includes significantly more history on how they have been used to shape medicine and political power over the years.",
            "Read carefully, the author has encoded the book with advice on how to manage a coup through the application of poisons. Choose 3 poisons and gain the ability to create them. Once the book has been read and comprehended with a successful Insight check, the reader can also gain advantage on any check made to poison a person in a significant political position."
        ]
    }, {
        card: "9",
        subtype: "manuals",
        type: "books",
        name: "Sapient Horticulture, by Percival Charles Mangonel-Divvock IV",
        desc: ["A book printed entirely on green paper that gives special help and advice for cultivating plants that demonstrate any degree of intelligence. A player can use this book to rear a treant that will be fully grown after 80 years.",
            "In addition, any medicine or Charisma based check directed towards a plant creature has advantage. You have advantage on checks made to recall lore about plant creatures, and survival checks made to track or identify them."
        ]
    }, {
        card: "10",
        subtype: "manuals",
        type: "books",
        name: "Conditioning to Wrestle, by Puzac Bravecarver",
        desc: ["A training regime for ambitious wrestlers. The book includes dietary suggestions, gives detailed explanations for what benefit each exercise offers, and offers comprehensive guides on stretching and better body care.",
            "A successful Religion or History check on the name of the author knows that they were a former champion of Bahamut and a notorious competitor in many international forms of wrestling, and that Puzac still lives somewhere in the world.",
            "Readers take no penalty on grapple checks for being exhausted, and can grapple a creature as a reaction if that creature provokes an opportunity attack. A creature successfully grappled takes no further movement."
        ]
    }, {
        card: "Page",
        subtype: "manuals",
        type: "books",
        name: "Metallurgy for the Arcanist, by Ellughis the Avaricious",
        desc: ["The book was penned by a dragon who offered to expand the lore of magic in exchange for an exorbitant fee. He rejoiced in the title he was given by the publisher.",
            "Detailing the use of metals as material components in magical spells and works, the book is a must-have for artificers and wizards alike, and frequently found in studies, workshops, and colleges worldwide.",
            "Readers can use any precious metal of equivalent value to replace any material components of a wizard or artificer spell. Furthermore when they do, the price is reduced by 10% so long as the metal is not gold or silver."
        ]
    }, {
        card: "Knight",
        subtype: "manuals",
        type: "books",
        name: "Fuzzle’s Guide to Befriending Beasts",
        desc: ["A treatise on the matter of taming animals for friendship, usually with a view to making a creature into a pet. The author “Fuzzle” seems to have questionable interpretations of what a “beast” is, and there are guides on how to make friends with gryphons, hydras, goblins, vampires, fish, and, somehow, the Tarrasque.",
            "Reading The Sleeping Titan: A Record of Tarrasque Events reveals at least one historical instance in which the Tarrasque was forced to lie down and roll over by the command of an unnamed hero who was last seen giving the Titan “belly scratches”.",
            "A reader gains a 1d4 bonus to ability checks that relate to making a creature subservient via friendship and affection. The bonus is lost if the reader attempts to intimidate, coerce, or otherwise exert a negative influence on the creature."
        ]
    }, {
        card: "Queen",
        subtype: "manuals",
        type: "books",
        name: "Power Through Influence, Rory Tempest Montgomery, Biographer in Chief for the Golden Queen of Eblayla, and Master of Record",
        desc: ["A heavy tome steeped in grandiose language and heavy on the jargon, the cover and each chapter page is inlaid with golden filigree and excessive ornamentation, meaning that the book itself is probably worth hundreds of gold just for the paper.",
            "A character with Intelligence 17 or higher can use their Intelligence in place of Charisma for checks concerning nobility and politics."
        ]
    }, {
        card: "King",
        subtype: "manuals",
        type: "books",
        name: "The Adventurer’s Guide to Wealth Investment and Retirement",
        desc: ["With the advice in this book a creature who has obtained 3 or more treasure hoards can begin to increase their wealth and ensure its security and safety from thieves. It includes suggestions such as investment in property, business, or the foundation of a new settlement.",
            "Your wealth becomes immune to theft from outside sources of CR equal to or lower than the greatest hoard you have obtained. Once you have obtained the highest rating of hoard your money should either be invested in a town that can defend itself utterly from invasion and tend to your requirements, or invested in a trust in Mechanus requiring that the thief go against the will of Primus while you earn 10% PA.",
            "The final page of the book advises that the reader sell the copy for a profit."
        ]
    }
]

import { outputJson } from './utils/dataParsing.js';

outputJson("books", books);


const collections = {

    "documentType": "books",
    "collections": ["fiction", "artisticCollections", "manuals", "textbooks"]
}