var begin = confirm('Do you like nightclubs?')
var myScore = 0;
if(begin == true) {
	myScore = myScore + 5;
	alert("Great. This might be a familiar adventure for you! And you already have " + myScore + " points!");
	alert(`You and your friends are going to Hakasaan tonight. It's ladies night, Calvin Harris is performing, and you all are hoping to meet some hot babes.
		\nYou even see a group of three beautiful ladies outside the club right now.
		\nIts going to be a great night!`)
	alert(`You approach the club but you are stopped by the bouncer. He's the largest man you've ever seen...bigger than you and your friends all put together. He also looks pretty unhappy and totally not willing to let you just walk past him into the club. \nYou give a smile and a 'Wassup!', none of which are acknowledged. \nThe bouncer looks at you in disgust and simply holds up one finger. Incidentally, that finger is bigger than your wrist.`)
	var cash = confirm(`Do you have cash for the bouncer?`)
		if(cash == true) {
			myScore = myScore + 5;
			alert("You slip the bouncer $200 and you get in right away. Very smooth move and your friends are impressed. \nAnd those girls noticed too! You've got " + myScore + " points so far.")
		} else {
			myScore = myScore + 1;
			alert("You wait in line with the rest of the crowd for 2 hours and miss the Calvin Harris remix of 'Wonderwall', which is totally your jam. You have " + myScore + " points.")
		}
 
alert(`You get in and the party is going strong. Calvin Harris is mixing and remixing like a boss.\n The club is packed with celebrities and other gorgeous people. \nOh my God! Is that David Spade in the VIP section? With that Kardashian kid who isn't on the TV show? Its going to be lit for sure!`)
alert(`On the way to the bar you bump into a nicely dressed dude with really good hair. You lock eyes, and not in a good way. \nPeople around you all stop and watch and wait for the next move. \nPhones start coming out and everyone is ready to livestream the fight to Facebook. The tension is thick like a Dairy Queen blizzard. \nYou can either talk to this guy, or start fighting.`)
var action = confirm(`No time to think. Do you talk to this guy?`)
	if(action == true) {
		myScore = myScore + 5;
		alert(`You apologize and chat for a bit. Turns out that this guy is a VIP Host for the club and you both went to the same high school back home! You've got ` + myScore + ` points now. \nYou put on your coolest face and ask him if he can hook you up with a table. \nHe asks how much are you willing to budget.`);
		var tableCash = prompt('Do you give him $500, $1000 or $0?')
			if(tableCash == '$500') {
				myScore = myScore + 2;
				alert(`He tells you that table on the second floor just opened up and he escorts you and your friends upstairs. \nIt's pretty quiet up there, and far from the action. \nBut you can always go downstairs to the dance floor and find those ladies from earlier. You've got ` + myScore + ` points now.`);
				alert('The music is great, but everyone is downstairs. So you and your friends head down to the dance floor. \nOn the way you spot that group of three ladies from earlier in the night and all start dancing together. All three are very cute and they seem to be interested in you and your friends too! \nBut you have to decide which girl you want to talk to.')
				alert(`Girl 1 has been making eyes at you all night and smiling. She's been laughing at all your jokes and commenting about how nice your beard looks. She even likes your Adventure Time t-shirt.\nGirl 2 has been dancing with your friend but she's also been laughing at your jokes and checking you out too. It's her first time in Vegas and she just got out of a bad relationship.\nGirl 3 is wearing this really cool "Pug Life" t-shirt with a dog on the front. She's not a great dancer, but not terrible either. She didn't really laugh at your jokes.`)
				var danceChat = prompt('Do you focus on Girl 1, Girl 2 or Girl 3?')
					if(danceChat == 'Girl 1') {
						myScore = myScore - 17;
						alert(`You decide to focus your charms on Girl 1. You dance, you get more drinks and you hit the dance floor harder than a falling drunk. Everything is going so well. She tells you that she has a Spa Suite upstairs in MGM and you should both totally get out of there. \nSo you both leave and get to her room. She closes and locks the door and tells you how she knew you were the one for her when she saw you in line, because the voices in her head said so and they never lie. \nThe voices also said that she should turn up the music so nobody hears you scream. \nYou have ` + myScore + ` points and your body is found two days later.`)
					} else if(danceChat == 'Girl 2') {
						myScore = myScore - 5;
						alert(`You decide to focus your flirting on Girl 2. You start getting more touchy with her and completely ignore that she is clearly not interested in you. To make things worse, your friend is getting pissed. He politely asks you to back off. \nBut you've already had too much to drink and you won't listen. \nNow the situation is getting really cringy, so the girls just leave. Your friends call an Uber and leave you behind at the club as a drunken mess. \nYou pass out in the bathroom until security finds you and throws you out. You are the worst kind of friend. And you go home with ` + myScore + ` points.`)
					} else if(danceChat == 'Girl 3') {
						myScore = myScore + 10;
						alert(`You decide to focus your attention on Girl 3. Neither of you really likes dancing, so you head back to your quiet table and chat. Turns out she is really into dinosaurs and you've been dying to see the new Jurassic World movie but nobody wants to go with you. So you make a date for the following week. \nYou both meet up at the theater and have an awesome time. You end up becoming a serious couple and eventually propose to her during an archaeological tourism vacation package to South Africa that you booked on LivingSocial. \nYou go on to have two adorable children and you all travel the world together with your ` + myScore + ` points.`)
					} else {
						myScore = myScore - 8;
						alert(`You don't talk to any of the three girls and decide to just enjoy the dancing. So you take some molly and go stare at laser lights near the speakers for a few minutes. \nWhen you turn around, your friends and the girls have all gone off somewhere. So you go back to the laser lights and have the best trip of your life. \nUntil security notices you drooling by yourself and they escort you out of the club. You go sit on a bench until morning. You don't remember if you had a good time or not. You check your pocket and find ` + myScore + ` points.`)
					}
			} else if(tableCash == '$1000') {
				myScore = myScore + 10;
				alert(`He smiles and tells you a table next to the DJ booth just became available. \n He calls some servers over to escort you and your friends to your table. \nYou have achieved baller status. You now have ` + myScore + ` points.`)
				alert(`As soon as you all sit down, the girls start coming over to you. You and your friends are cooler than Burt Reynolds and having an awesome time. \nBefore long that group of three ladies from earlier comes to sit with you. Now things are really getting interesting.`)
				alert(`The girls ask to sit with you. You are not a total dumbass so you say "Of course!" and beckon them into your booth. But who will sit next to you? You find all three girls attractive, and none of them seems to hate looking at your face.`)
				alert(`Girl 1 has a great smile. And she did laugh when you said "You know what they say about what happens in Vegas?" \nGirl 2 looks a little drunk. Not falling-over drunk, but a little tired. Or maybe disinterested. Its hard to tell with all those lasers and flashing lights. \nGirl 3 is mostly looking at Calvin Harris.`)
					var finalChoice = prompt(`Who is sitting next to you? Girl 1, Girl 2 or Girl 3?`)
						if(finalChoice == 'Girl 1') {
							myScore = myScore + 10;
							alert(`You grab Girl 1 gently by the arm and lead her to the seat next to you on the couch. You make a few more bad jokes, but somehow she laughs at them too. Turns out you both like the same movies and the same music. You both even agree that Wu-Tang Clan's first album is better than anything else they've ever done. \nIn short, you two are perfect for each other. \nYou both stay in touch after you leave Vegas and you decide to throw caution to the wind and you move to Los Angeles to be closer to her. It totally works out and you eventually get married and have children. \nWhat a romantic story! And you also have ` + myScore + ` points, which is nice.`)
						} else if(finalChoice == 'Girl 2') {
							myScore = myScore - 10;
							alert(`You lock eyes with Girl 2 and motion for her to sit next to you. She takes one step towards you and that's when you notice that she is waaayyyyy too drunk to be vertical. \nAs soon as she falls forward, you leap into action and catch her. You saved the day, and maybe even her life! Too bad security notices the commotion and decides to throw everyone out. \nThe girls have to leave to take care of their drunken friend. While you are waiting for your Uber you wonder to yourself if you should have just let her fall and then told security that you didn't know them at all. You realize that your friends are also wondering why you didn't do that very thing, so somehow you are the bad guy. You look and see that you have only ` + myScore + ` points left. \nSo you go home to look at internet porn...again.`)
						} else if(finalChoice == 'Girl 3') {
							myScore = myScore - 12;
							alert(`Girl 3 looks away from Calvin Harris long enough to see a seat next to you that also happens to be facing Calvin Harris. So she sits next to you and pretends to laugh at your jokes, all while staring at Calvin Harris, who is now staring at her too. A few minutes later, a man in a bedazzled t-shirt and a cap that says "IDGAF" in flashing LED lights comes over and whisks Girl 3 away. That man is Calvin Harris's assistant and now she is up in the DJ booth with Calvin Harris. Way to go, Cupid. You go home heartbroken with ` + myScore + ` points.`)
						} else {
							myScore = myScore - 8;
							alert(`You decide to play it cool and let the girls choose where to sit. All three girls go to sit around your friends, and you are left to sit alone at the edge of the couch. You realize you spent $1200 to help your friends meet ladies, so at least you have some good karma coming your way eventually. Not a terrible way to end the night, but certainly not the best result. At least you finished with ` + myScore + ` points.`)
						}
			} else if(tableCash == '$0') {
				myScore = myScore - 15;
				alert(`You've wasted the VIP Host's money-making time. So in a fit of rage he calls the bouncer over and tells him that you and your friends are harassing other customers and being jerks. \nYou are all kicked out of Hakasaan and now everyone thinks you are a cheapskate. Enjoy that car-ride home. You finish with ` + myScore + ` points and a bad reputation.`)
			}
				else {
					myScore = myScore - 20;
					alert(`In this country, only money is accepted as currency. So the VIP Host is not impressed by your bad sense of humor. Neither is the bouncer, who has been waiting all night to throw you and your cheesy friends out of the club. \nYour friends remind you why they hate going out with you: because you always act like a douche. You mumble something about the night being young but your former friends are already getting in a taxi and leaving you in the dust. You wake up the next morning behind a dumpster next to Palomino Club with no wallet and no shoes. And you smell like urine...likely not your own. And you have only ` + myScore + ` points.`)
				}
	} else {
		myScore = myScore - 6;
		alert(`You start throwing punches like a drunken schoolgirl and manage to hit nobody. But security sees you being a fool and throws you and your friends out on the street. \nLooks like another evening of cold pizza, supermarket beer and Rocket League. \nBut someone recorded you getting thrown out of the club and posted it to Worldstar. \nYou have ` + myScore + ` points but at least you are internet famous.`)
	} 
}
else {
	alert("This game is definitely not for you, Poindexter. Go back to your books.")
}