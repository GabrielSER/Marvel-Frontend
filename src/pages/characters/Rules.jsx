import clsx from 'clsx'
import Watcher from '../../assets/images/places/watcher.jpg'
import TOAA from '../../assets/images/places/TOAA.webp'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import Whatif from '../../assets/images/places/whatif.jpg'
import worldbuilding from '../../assets/images/places/worldbuilding.jpg'
import stanlee from '../../assets/images/places/stanlee.jpg'
import npc from '../../assets/images/places/npc.jpg'
import tone from '../../assets/images/places/tone.jpg'
import doom from '../../assets/images/places/DOOM-BANNER.webp'
import namor from '../../assets/images/places/namor.png'
import dnd from '../../assets/images/places/dnd.avif'
import creativity from '../../assets/images/places/creativity.jpg'
import { Link } from 'react-router-dom'

const BigTitle = (props) => (
  <div className='flex flex-col items-center max-w-full'>
    <div className='flex flex-row w-auto'>
      <ComicTitlePanel>
        <h1
          className='text-lg sm:text-4xl font-semibold text-center'
          {...props}
        />
      </ComicTitlePanel>
    </div>
  </div>
)

const Title = (props) => (
  <ComicTitlePanel className='bg-comic-secondary self-center max-w-full'>
    <h2
      className='text-sm sm:text-lg font-semibold text-center'
      {...props}
    />
  </ComicTitlePanel>
)

const Paragraph = (props) => (
  <div
    className='text-gray-700 text-justify'
    {...props}
  />
)

const Section = (props) => (
  <div
    className='flex flex-col w-full space-y-4'
    {...props}
  />
)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This adds a smooth scrolling effect
  })
}

const Rules = () => {
  return (
    <div
      className={clsx(
        'relative',
        'flex flex-wrap',
        'items-center',
        'justify-center',
        'py-6 px-8',
        'min-h-screen gap-y-20'
      )}
    >
      <Section className='flex flex-col max-w-full gap-4'>
        <div className='flex flex-row self-center gap-4 max-w-full'>
          <ComicTitlePanel>
            <h1 className='text-3xl sm:text-5xl font-semibold m-4 text-center'>
              GAME MASTER'S GUIDE
            </h1>
          </ComicTitlePanel>
        </div>
        <div className='flex flex-row self-center max-w-full'>
          <BigTitle>The One Above All</BigTitle>
        </div>
      </Section>

      <Section>
        <Paragraph>
          In any role-playing game, adventure, or acquired module or accessory,
          the Game Master plays a pivotal role. The Game Master is the linchpin
          of the entire operation; without them, even the most exceptional RPG
          in the world becomes nothing more than engaging reading.
        </Paragraph>
        <Paragraph>
          So, what is a Game Master? In the All New Marvel Rolleplaying game,
          the Game Master takes the role of the One Above All, an encarnation of
          the Marvel Comics Writer, and they serve as the stage-setter, the
          storyteller, the mediator, and the narrator. They provide the
          background, narrate what the player characters observe, and control
          the non-player characters, ranging from significant threats to the
          universe to minor criminals, innocent bystanders, and other heroes and
          law enforcement. The Game Master determines the success of a
          character's actions or if a villain manages to escape. They create
          challenges for the heroes and share information that enables their
          success.
        </Paragraph>
        <Paragraph>
          To suggest that the Game Master works against the players, merely
          because they control the antagonists, is a misnomer and entirely
          inaccurate. Instead, the Game Master collaborates with the players to
          craft a delightful, entertaining tale that can be fondly remembered
          and retold with a smile ("Hey, remember when Dogpool challenged
          Molecule Man to a duel?"). Entertainment is the core objective. The
          Game Master and players, in tandem, compose the narrative for their
          own comic book. Together, the Game Master and players create a final
          product that is worth discussing and sharing.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={TOAA}
            alt='The One Above All'
          />
        </div>
        <Paragraph>
          The essence lies in entertainment. The Game Master (GM) and players
          collaborate to craft the storyline for their personalized comic book.
          Together, the GM and players generate a finished product that sparks
          discussions.
        </Paragraph>
        <Paragraph>
          The distinct responsibilities of the Game Master encompass:
        </Paragraph>
        <Paragraph>
          - Describing the scenario to players, offering insights from the
          player-characters' perspective.
        </Paragraph>
        <Paragraph>
          -Addressing player queries and providing clarity on statements.
        </Paragraph>
        <Paragraph>
          -Assuming the roles of various non-player characters (NPCs) that the
          player-characters come across.
        </Paragraph>
        <Paragraph>-Managing game mechanics.</Paragraph>
        <Paragraph>
          -Making decisions or judgments when required in in-game situations.
        </Paragraph>
      </Section>

      <Section>
        <BigTitle>Your Marvel Universe</BigTitle>
        <Paragraph>
          The old comic line of "What If?" played with these possible variant
          universes, where the Avengers never happened, Spider-Man joined the
          Fantastic Four, or Jane Foster found the Hammer of Thor.
        </Paragraph>

        <Paragraph>
          Similarly, when you begin a Marvel Universe campaign, you are creating
          your own "What If" line. Your player-characters are tree from what
          happens in the "mainline" Marvel Universe after the campaign has
          started, and in addition, you can add your own embellishments,
          villains, and actions. In your universe, Doctor Doom may reform and
          become a good guy, or the Red Skull may still be alive. And just
          because some great misfortune occurs to a character in a comic book,
          that same misfortune does not have to occur to the characters in your
          universe. Your universe can reflect actions in the Marvel Universe,
          and benefit from its history and heritage, but is not tied down to it.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Whatif}
            alt='What If?'
          />
        </div>

        <Paragraph>
          The Game Master (GM) controls roleplay by serving as the storyteller,
          referee, and facilitator of the game world. The GM is responsible for
          creating the setting, presenting challenges, portraying non-player
          characters (NPCs), and guiding the overall narrative. Here are some
          key ways in which a Game Master controls roleplay:
        </Paragraph>

        <Title>World-Building</Title>
        <Paragraph>
          The GM establishes the game world, including its history, geography,
          cultures, and political systems. This sets the stage for the players'
          characters (PCs) to inhabit and interact with the environment. Check
          out the{' '}
          <Link
            onClick={scrollToTop}
            className='text-primary'
            to='/places'
          >
            Marvel Universe
          </Link>{' '}
          section to read about key locations, planets, cultures and places from
          the Marvel Comics.
          World-building is the backbone of your campaign—it provides the context in which heroes rise, villains scheme, and players get to shape their own legacies. As the Game Master (GM), your role is not only to describe places and events, but also to breathe life into the Marvel Universe so that it feels both familiar and open to discovery.
          Treat the Marvel Universe like clay—it already has rich lore, but you can reshape it. Decide what’s canon, what’s changed, and what’s brand new. That blend of familiarity and surprise will keep players hooked.
        </Paragraph>

        <Paragraph>
          <b>History: </b>Establish your timeline: stick to Marvel’s 616 continuity, the cinematic universe, or an alternate version of your own. Decide which major events—Civil War, Secret Wars, the Blip—have happened. Leave mysteries and untold stories to fuel future adventures.
        </Paragraph>
        <Paragraph>
          <b>Geography: </b>Marvel’s Earth is both familiar and extraordinary. Anchor your campaign in iconic places like New York City, Wakanda, Latveria, or Madripoor, while also introducing otherworldly sites such as Asgard, Knowhere, and the Blue Area of the Moon. A blended map of real and Marvel-specific locations helps ground the setting.
        </Paragraph>
        <Paragraph>
          <b>Cultures: </b>Superhuman communities, secret societies, and alien empires bring diversity and conflict. Mutants, Inhumans, and Eternals have unique traditions; HYDRA, S.H.I.E.L.D., and the Hellfire Club wield hidden influence; Skrulls, Kree, and Shi’ar provide interstellar intrigue. Present each as more than just factions, but as full societies with values and tensions.
        </Paragraph>
        <Paragraph>
          <b>Politics: </b>Marvel is full of clashing powers. Nations like Wakanda and Latveria, agencies like S.H.I.E.L.D., and cosmic authorities like the Kree Supreme Intelligence all shape events. Political friction—such as mutant registration laws or alien treaties—creates storylines that don’t always rely on supervillains.
        </Paragraph>
        <Paragraph>
          <b>Player Impact: </b>The world should react to players’ decisions. Saving a city, exposing corruption, or brokering peace between alien races leaves ripples that shape future events. This ensures the campaign feels alive and responsive, making their actions matter in the larger Marvel Universe.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={worldbuilding}
            alt='Worldbuilding'
          />
        </div>

        <Title>Narration and Description</Title>
        <Paragraph>
          Narration is the GM’s primary tool for immersing players in the world. Your words bring the Marvel setting to life—turning maps, notes, and rules into vivid experiences. Through description, you set the tone of each scene, capture the feel of environments, and guide the flow of events as they unfold.
        </Paragraph>
        <Paragraph>
          <b>Setting the Scene: </b>Each encounter begins with atmosphere. Describe the sights, sounds, and mood of a location: the neon haze of Madripoor’s alleys, the hum of alien machinery on Knowhere, or the still silence before a Sentinel attack. Keep details focused but evocative, giving just enough for players to picture the scene while leaving space for their imagination.
        </Paragraph>
        <Paragraph>
          <b>Characters and NPCs: </b>Bring non-player characters to life through description. Mention their appearance, mannerisms, and voice, but also their presence—whether they inspire fear, trust, or suspicion. A S.H.I.E.L.D. agent might be crisp and efficient, while a HYDRA operative exudes menace in subtle gestures. Distinct descriptions make NPCs memorable and easier for players to roleplay against.
        </Paragraph>
        <Paragraph>
          <b>Action and Consequences: </b>When players act, narration translates mechanics into story. A successful roll might become a cinematic description of acrobatics, blasts, or clever strategies, while failure can reveal danger or create dramatic tension. The outcome should feel like part of a Marvel comic panel—dynamic, colorful, and with clear consequences that push the story forward.
        </Paragraph>
        <Paragraph>
          <b>Tone and Style: </b>The way you narrate shapes the campaign’s feel. A grounded, gritty style might suit a street-level story with Daredevil or Luke Cage, while bold, cosmic language works for adventures with the Guardians of the Galaxy. Consistency in tone helps the players know what to expect and keeps immersion strong.
        </Paragraph>
        <Paragraph>
          <b>Player Agency: </b>Effective narration doesn’t just describe—it invites player input. Leave moments open for characters to ask questions, notice details, or describe their own actions. This balances your control of the narrative with the creativity of the group, making the story collaborative rather than one-sided.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={stanlee}
            alt='narrator'
          />
        </div>

        <Title>NPC Portrayal</Title>
        <Paragraph>
          The GM brings NPCs to life by role-playing their personalities,
          mannerisms, and dialogues. This adds depth to the game world and
          provides the players with characters to interact with. NPCs are the heartbeat of the game world. Through them, the GM gives players someone to trust, fear, challenge, or deceive. By role-playing their personalities, mannerisms, and voices, you make these characters feel like real individuals rather than just story devices.
        </Paragraph>
        <Paragraph>
          <b>Personalities and Motivations: </b>Every NPC should have clear goals, values, and flaws. A S.H.I.E.L.D. handler might genuinely want to protect civilians but resent superheroes overshadowing her. A street-level informant may be greedy yet loyal to old friends. These internal drives shape how NPCs respond, adding authenticity to interactions.
        </Paragraph>
        <Paragraph>
          <b>Mannerisms and Distinct Traits: </b>Small quirks make NPCs memorable. A villain who always adjusts his gloves, a Wakandan scientist who hums while working, or a nervous intern who can’t stop checking their phone—all of these details help players instantly recognize the character without long descriptions.
        </Paragraph>
        <Paragraph>
          <b>Dialogue and Voice: </b>How an NPC speaks says as much about them as what they say. Use tone, rhythm, or vocabulary to set them apart. For example, Doctor Doom speaks in grand, commanding phrases; Peter Parker jokes nervously; Nick Fury cuts to the point with sharp brevity. Shaping dialogue in this way reinforces their role in the Marvel world.
        </Paragraph>
        <Paragraph>
          <b>Role in the Story: </b>NPCs provide more than flavor—they are guides, rivals, allies, or foils. Some may serve as quest givers or mentors, while others create moral dilemmas or hidden betrayals. Deciding whether an NPC is a help, a hindrance, or something in between gives players meaningful choices in how they engage with them.
        </Paragraph>
        <Paragraph>
          <b>Player Interaction: </b>The strength of NPC portrayal comes from how players respond. Give them reasons to care: an ally who risks their life for the heroes, a civilian whose trust must be earned, or a villain who challenges not just their strength but their ideals. The more dynamic the NPC, the deeper the players’ investment in the story.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={npc}
            alt='NPCs'
          />
        </div>

        <Title>Setting the Tone</Title>
        <Paragraph>
          The GM establishes the tone and atmosphere of the game, whether it's a
          serious epic, a lighthearted adventure, or a mixture of both. This
          influences the style of roleplay and the overall experience for the
          players. Tone is the emotional backdrop of your campaign. It defines whether your Marvel story feels like a gritty noir, a cosmic epic, or a lighthearted romp. As the GM, your narration, pacing, and style of description establish this atmosphere, shaping how players engage with the world and each other.
        </Paragraph>

        <Paragraph>
          <b>Consistency of Atmosphere: </b>The chosen tone should remain consistent across sessions. If you aim for serious drama, focus on weighty moral dilemmas, political intrigue, and the heavy consequences of choices. If you prefer a lighter adventure, emphasize witty banter, spectacular action, and fast-paced humor. Players thrive when the tone is predictable enough to guide their roleplay.
        </Paragraph>
        <Paragraph>
          <b>Mixing Styles: </b>Marvel stories often balance comedy with drama. A campaign can shift between lighthearted moments (banter in the Quinjet, awkward interactions with civilians) and serious stakes (a villain threatening entire cities). Allowing both creates emotional contrast—moments of levity make the darker turns feel more powerful.
        </Paragraph>
        <Paragraph>
          <b>Roleplay Impact: </b>How an NPC speaks says as much about them as what they say. Use tone, rhythm, or vocabulary to set them apart. For example, Doctor Doom speaks in grand, commanding phrases; Peter Parker jokes nervously; Nick Fury cuts to the point with sharp brevity. Shaping dialogue in this way reinforces their role in the Marvel world.
        </Paragraph>
        <Paragraph>
          <b>Tools for GMs: </b>Tone is reinforced through description, NPC portrayal, and even background details. Music, props, or visual aids can deepen immersion. A neon-soaked city street sets up a very different vibe than the shining halls of Asgard. Every detail you share contributes to the overall emotional palette of the game.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={tone}
            alt='tone'
          />
        </div>

        <Title>Presenting Challenges</Title>
        <Paragraph>
          The GM introduces challenges and obstacles for the players to
          overcome. These challenges can be in the form of puzzles, combat
          encounters, diplomatic negotiations, or other situations that require
          the players to make decisions and roleplay their responses. Challenges are the driving force of gameplay. As the GM, you provide obstacles that test the players’ creativity, skills, and teamwork. These can take many forms—combat, puzzles, social conflicts, or moral dilemmas—and each one pushes the story forward while giving the heroes a chance to shine.
        </Paragraph>

        <Paragraph>
          <b>Variety of Challenges: </b>Not every obstacle needs to be a battle. Combat encounters deliver excitement and spectacle, but puzzles test logic, diplomatic negotiations challenge persuasion, and exploration rewards curiosity. By mixing challenge types, you ensure the campaign stays dynamic and appeals to different player strengths.
        </Paragraph>
        <Paragraph>
          <b>Decision-Making and Consequences: </b>Good challenges force players to make meaningful choices. Negotiating with Magneto may succeed with diplomacy, but failure could escalate to violence. Disarming a bomb in Times Square might save thousands, but at the risk of leaving another threat unchecked. The tension of limited time, resources, or options makes decisions impactful.
        </Paragraph>
        <Paragraph>
          <b>Roleplay Opportunities: </b>Obstacles aren’t just mechanical—they encourage roleplay. A courtroom trial gives the lawyer-hero a stage to argue, while a stealth mission lets players narrate clever tactics. Even combat can highlight roleplay if villains taunt, heroes banter, or civilians complicate the fight.
        </Paragraph>
        <Paragraph>
          <b>Scaling Difficulty: </b>Challenges should feel fair but never trivial. Adjust obstacles to the group’s abilities: street-level heroes face gangs, heists, and corruption, while cosmic-level heroes grapple with alien armadas or collapsing realities. Scaling difficulty ensures every victory feels earned.
        </Paragraph>
        <Paragraph>
          <b>Story Integration: </b>Every challenge should serve the narrative. A puzzle might reveal Hydra’s secret plans, a fight could protect Wakanda from invaders, or a negotiation may prevent war between Kree and Skrulls. By tying obstacles to the story, players feel they’re part of a living Marvel saga, not just solving random problems.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={doom}
            alt='Challange'
          />
        </div>

        <Title>Managing Rules and Mechanics</Title>
        <Paragraph>
          The GM enforces the game rules and mechanics, ensuring a fair and
          consistent experience for the players. This includes resolving
          conflicts, determining the outcomes of actions through dice rolls, and
          applying the rules of the game. The GM is the steward of the rules, ensuring the game runs fairly and smoothly. By applying mechanics consistently, you create trust between players and maintain balance in the story. Rules provide structure, but they should also serve the flow of the narrative rather than slow it down.
        </Paragraph>

        <Paragraph>
          <b>Variety of Challenges: </b>Not every obstacle needs to be a battle. Combat encounters deliver excitement and spectacle, but puzzles test logic, diplomatic negotiations challenge persuasion, and exploration rewards curiosity. By mixing challenge types, you ensure the campaign stays dynamic and appeals to different player strengths.
        </Paragraph>
        <Paragraph>
          <b>Decision-Making and Consequences: </b>Good challenges force players to make meaningful choices. Negotiating with Magneto may succeed with diplomacy, but failure could escalate to violence. Disarming a bomb in Times Square might save thousands, but at the risk of leaving another threat unchecked. The tension of limited time, resources, or options makes decisions impactful.
        </Paragraph>
        <Paragraph>
          <b>Roleplay Opportunities: </b>Obstacles aren’t just mechanical—they encourage roleplay. A courtroom trial gives the lawyer-hero a stage to argue, while a stealth mission lets players narrate clever tactics. Even combat can highlight roleplay if villains taunt, heroes banter, or civilians complicate the fight.
        </Paragraph>
        <Paragraph>
          <b>Scaling Difficulty: </b>Challenges should feel fair but never trivial. Adjust obstacles to the group’s abilities: street-level heroes face gangs, heists, and corruption, while cosmic-level heroes grapple with alien armadas or collapsing realities. Scaling difficulty ensures every victory feels earned.
        </Paragraph>
        <Paragraph>
          <b>Story Integration: </b>Every challenge should serve the narrative. A puzzle might reveal Hydra’s secret plans, a fight could protect Wakanda from invaders, or a negotiation may prevent war between Kree and Skrulls. By tying obstacles to the story, players feel they’re part of a living Marvel saga, not just solving random problems.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={namor}
            alt='Rules'
          />
        </div>

        <Title>Adapting to Player Choices</Title>
        <Paragraph>
          The GM adjusts the narrative based on the choices made by the players.
          This flexibility allows for a dynamic and responsive story that
          evolves organically based on the characters' decisions. Flexibility is at the heart of good GMing. While you may plan story arcs and encounters, the players’ decisions shape how events unfold. By adjusting the narrative to their choices, you create a story that feels alive and collaborative rather than pre-written.
        </Paragraph>

        <Paragraph>
          <b>Dynamic Storytelling: </b>Player actions should have visible consequences. If heroes ally with S.H.I.E.L.D., they may gain resources but attract HYDRA’s attention. If they spare a villain, that character could return later as either an ally or a greater threat. This responsiveness makes the story feel organic.
        </Paragraph>
        <Paragraph>
          <b>Branching Paths: </b>Rather than planning one “correct” solution, prepare multiple possible outcomes. For example, stopping a Skrull invasion might be done through diplomacy, espionage, or all-out combat—each leading to different story developments. This gives players agency while still guiding the narrative forward.
        </Paragraph>
        <Paragraph>
          <b>Improvisation Skills: </b>No plan survives contact with the players. They will often surprise you with unexpected strategies or roleplay choices. Strong improvisation—reusing NPCs, re-skinning encounters, or shifting timelines—lets you adapt without breaking immersion.
        </Paragraph>
        <Paragraph>
          <b>Respecting Player Agency: </b>Adapting means respecting that player choices matter. Avoid forcing them back onto a single “scripted” path. Instead, build the world so it reacts logically: governments respond to their actions, civilians spread their reputations, and villains adjust their plans.
        </Paragraph>
        <Paragraph>
          <b>Maintaining Coherence: </b>While adapting, keep the story cohesive. Even when improvising, ensure that events still connect to established themes, characters, and stakes. This keeps the world consistent while still rewarding the players’ freedom to act.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={dnd}
            alt='Storytellying'
          />
        </div>


        <Title>Encouraging Player Creativity</Title>
        <Paragraph>
          The GM fosters a collaborative storytelling environment by encouraging
          players to contribute to the narrative, describe their character's
          actions, and engage in creative problem-solving. One of the GM’s most rewarding roles is nurturing player imagination. A campaign thrives when players feel empowered to shape the story, experiment with solutions, and add to the shared world. By encouraging creativity, you transform the game into a collaborative narrative rather than a one-sided performance.
        </Paragraph>

        <Paragraph>
          <b>Collaborative Storytelling: </b>Invite players to expand the world with their own ideas. A character might describe how their powers manifest visually, invent a contact in Madripoor, or detail how their family reacts to their secret identity. Incorporating these contributions enriches the setting and gives players ownership of the story.
        </Paragraph>
        <Paragraph>
          <b>Describing Actions: </b>Encourage players to go beyond “I roll to attack.” Ask them how their hero fights—does Iron Fist unleash a glowing strike, or does Spider-Man swing in with witty quips? By letting players describe their actions cinematically, the game feels closer to a living comic book.
        </Paragraph>
        <Paragraph>
          <b>Creative Problem-Solving: </b>Challenges should allow multiple solutions. If players propose an unexpected but reasonable approach—like using Magneto’s magnetism to disable a security grid or negotiating with a villain instead of fighting—reward the creativity. This fosters a culture where ingenuity is celebrated, not punished.
        </Paragraph>
        <Paragraph>
          <b>Building Confidence: </b>Not every player is equally comfortable improvising. Provide gentle prompts or spotlight moments for quieter players, such as asking what detail their character notices or how they’d handle a tense situation. Supporting all levels of creativity ensures everyone feels included.
        </Paragraph>
        <Paragraph>
          <b>Shared Ownership: </b>When players see their creative contributions shaping the campaign, they invest more deeply. A throwaway NPC they invent might become a recurring ally; a unique strategy might inspire a whole story arc. By validating and expanding on their ideas, you show that the game is a shared creation, not just the GM’s story.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={creativity}
            alt='RPG'
          />
        </div>

        <Title>Facilitating Roleplay Between Players</Title>
        <Paragraph>
          The GM creates opportunities for roleplay interactions between player
          characters, fostering character development, relationships, and
          collaborative storytelling within the group. Roleplay isn’t limited to interactions with NPCs—the richest storytelling often comes from how player characters connect with each other. The GM’s role is to create space and opportunities for these interactions, encouraging relationships, conflicts, and alliances that deepen both the characters and the overall narrative.
        </Paragraph>


        <Paragraph>
          <b>Creating Opportunities: </b>Give players situations where their characters naturally interact: downtime between missions, debates over strategy, or moral dilemmas that spark discussion. Even small moments—like waiting for intel in a Quinjet—can become scenes where bonds are formed.
        </Paragraph>
        <Paragraph>
          <b>Encouraging Character Development: </b>Interactions between PCs allow players to explore their characters’ beliefs, flaws, and goals. A lawful hero may clash with a more reckless vigilante, while two outsiders might bond over shared struggles. These exchanges reveal depth and make characters feel like part of a living world.
        </Paragraph>
        <Paragraph>
          <b>Building Relationships: </b>Friendships, rivalries, romances, and mentorships all emerge through roleplay. The GM doesn’t need to script these, but can prompt them with scenarios—such as an NPC questioning the group’s unity, or a challenge requiring two characters to rely on each other. These connections strengthen the party’s cohesion and emotional stakes.
        </Paragraph>
        <Paragraph>
          <b>Supporting Collaborative Storytelling: </b>By spotlighting PC-to-PC interactions, you encourage players to tell the story together. Let them argue, reconcile, plan, or celebrate in-character. These scenes often become as memorable as major battles, giving the campaign a personal dimension beyond missions and villains.
        </Paragraph>
        <Paragraph>
          <b>Balancing Spotlight: </b>Not every player is equally comfortable with deep roleplay. The GM can balance by prompting quieter players with direct but open questions (“How does your character react to that decision?”) while ensuring dominant voices don’t overshadow others. This keeps the roleplay collaborative and inclusive.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-3xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Watcher}
            alt='The Watcher'
          />
        </div>

        <Paragraph>
          By effectively managing these aspects, a skilled Game Master can guide
          and enhance the roleplay experience, creating a rich and immersive
          world for the players to explore and influence through their
          characters.
        </Paragraph>
      </Section>
    </div>
  )
}

export default Rules
