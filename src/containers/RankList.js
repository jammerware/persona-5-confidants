import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import confidants from '../data/confidants'
import '../index.css';
import './RankList.css';

class RankList extends Component {
	render() {
		return (
      <div className="RankList">
        <ul>
          {confidants[0].ranks.map((rank) => {
            return <li key={rank.rank}>
              <span><strong>Rank {rank.rank}</strong><br />{rank.text}</span>
              </li>
          })}
        </ul>
      </div>
		);
	}
}

/**
Makoto can most often be found during the day in front of the Student Council Office inside your school, or hanging outside the gates.
Rank 1:
After clearing the Bank Palace dungeon in the story, find Makoto in front of the Student Council Office at school. 
Rank 3 (Scholarly) Knowledge is required.
Unlocks Shadow Calculus ability, allowing you to see the potential drops from enemies on the analyse screen.
Rank 2:
Impactful Conversation Choices for this Rank:
Choice 1: "You're very well informed." +2
Choice 2: "That was dangerous." +3  /  "You should have known better." +2
Unlocks Baton Pass ability, letting you pass Makoto's turn to other Baton Pass users in battle after a 1 More.
Rank 3:
Impactful conversation choices for this rank:
Choice 2: "You can change." +3  /  "Don't let it get to you." +2
Choice 1: "You have the wrong idea." +2
Unlocks the Brainiac Talk ability, giving Makoto the chance to step in and rescue a failed demon negotiation.
Rank 4:
Impactful conversation choices for this rank:
Choice 1: "That's unlike you." +2
Choice 3: "Why do you use it?" +3  /  "That's adorable." +2
Choice 4: "That's an amazing goal." +3  /  "I like a woman in uniform." +2
Unlocks the Follow Up ability, giving Makoto the chance to attack an enemy after Joker as a follow-up.
Rank 5:
Impactful conversation choices for this rank:
Choice 1: "He sounds suspicious." +3  /  "That's annoying." +2
Choice 2: "I got this." +3  /  "Only if I can take it seriously." +2
Rank 6:
Requires rank 5 Charm.
Impactful conversation choices for this rank:
Choice 1: "Love comes in many forms." +3  /  "We just started." +2
Unlocks the Harisen Recovery ability, which gives Makoto the chance to step in and heal status ailments on party members when in the party.
Rank 7:
Impactful conversation choices for this rank:
Choice 4: "That's a horrible story." +3  /  "He was a noble man." +3  /  "Was it tough without him?" +2
Choice 5: All result in +3
Choice 6: All result in +2
Unlocks the Shadow Factorization ability, which tells you if an attack will be effective or not while targeting.
Rank 8:
Impactful conversation choices for this rank:
Choice 1: "He says that to all the girls." +2  /  "That's how he ropes you in." +2
Choice 2: "Absolutely." +3  /  "What are you going to do?" +2  /  "Eh, she deserves him." +2
Unlocks the Endure ability, giving Makoto a chance to withstand a blow in combat that would usually kill.
Rank 9:
This is the point when a romance with Makoto Niijima becomes available.
In order to start this rank, you'll need information on the host, Tsukasa. Get this by going to Shinjuku - there's a man outside the bookstore. Talk to him twice.
Impactful conversation choices for this rank:
Choice 1: All result in +3
Choice 2: All result in +2
Choice 3: "That was the right move." +2
Choice 4: "I'm a regular here." +3  /  "It's a popular meeting spot." +3  /  "Not as much as you." +2
Choice 5:
Friendship - "You'll find someone someday." +3  
Romance - "I'll be your study partner."
Choice 6:
Romance - "I do."  
Friendship - "That's not what I meant."
Unlocks the Protect ability, giving Makoto the ability to shield Joker from an attack that would be fatal.
Rank 10:
Any choices you make will be irrelevant, since this is the max rank.
Unlocks Second Awakening, evolving Makoto's Persona to its final form, Cybele.
*/

/**
Rank 1:
Automatically on 4/12.
Unlocks Wild Talk ability, allowing for negotiation with Shadows during a Hold Up.
Unlocks Arcana Burst, gifting Bonus EXP to Persona of this Arcana based on this Confidant's rank.
Rank 2:
Automatically after you infiltrate the first palace.
Unlocks Third Eye ability, letting you see things more clearly with L1/L2.
Rank 3:
Automatically on 5/5.
Unlocks Power Stock ability, increasing your Persona stock to 8.
Rank 4:
After the second palace
Rank 5:
Automatically on 6/11.
Unlocks Super Stock ability, increasing your Persona stock to 10.
Rank 6:
After the fourth palace.
Unlocks High Arcana Burst ability, granting further bonus EXP based on Confidant rank.
Rank 7:
Automatically on 8/22.
Rank 8:
Automatically on 8/31.
Unlocks the Ultra Stock ability, increasing your Persona stock to 12.
Rank 9:
Automatically on 10/11.
Rank 10:
Automatically on 12/24.
Unlocks the Max Arcana Burst, greatly raising bonus EXP for Fool Persona fusion.
*/

export default RankList;