# Cutter performance and issues

- **Date:** Tuesday, August 18, 2026 at 11:49 AM CDT
- **Course / folder:** CME Capstone Industry Week (Ingalls sheet metal shop, OP7/OP18 project)
- **Source:** Granola meeting `77af08ce-0df0-409b-b24b-5f64ba29cb3f` (AI summary + full transcript)
- **Transcript length:** ~10,496 words

## Summary (Granola AI notes)

### OP7 Bottleneck Overview

-   Core problem: OP7 cannot supply enough material to meet OP18’s demand
-   Fishbone diagram used to diagnose root causes across 6M categories
-   Staffing: OP7 has 3 operators per shift; OP18 has 8 total (typically ~5 on first shift)
-   When OP7 machines go down, operators are reassigned to OP18 or OP22

### Machine Issues

-   Multiple cutting machines in scope: plasma cutters, enclosed laser, straight cutters
-   Enclosed laser still experiences unplanned downtime
-   Plasma cutter bows thin sheet metal when cutting, triggering auto-shutdown
    -   Operators use magnets to weigh down sheets and prevent bowing
    -   If sheet is too large, magnets must be repositioned mid-cut, requiring operator to stand and watch
-   Each machine has only one trained operator; if that person is absent, the machine sits idle
-   Cross-training has not been done; reason unknown (likely learning curve or staffing constraints)
-   Question to follow up: why is each operator trained on only one machine?

### Forklift Constraints

-   Average 30-minute wait across all four cutting machines for forklift to move material
-   Only 2 forklifts assigned to the sheet metal shop, constrained by cost and charging logistics
-   Forklifts service the entire sheet metal shop, not just OP7
-   Cutting itself is not the bottleneck; waiting for material movement is
-   Open question: what other areas are the forklifts servicing, and how is forklift time prioritized?
-   Open question: how does the operator know when to request a forklift?

### Cutting Out of Order (Method)

-   Operators cut ahead of schedule to maximize sheet metal usage and minimize scrap
    -   Only one sub-assembly part may fit on a sheet, so operators fill remaining space with future parts
-   Result: parts OP18 needs now are delayed while lower-priority cuts are completed first
-   Scrap piles exist despite the out-of-order cutting strategy; unclear if remaining sheet sections are reusable
-   Identified as likely the most significant root cause for OP18 material shortages
-   Programs for what to cut are written by PCs (3 dedicated to that side of the shop); not seen as a bottleneck

### Fishbone Diagram: Categories Assessed

-   Manpower: one operator per machine; no cross-training
-   Machine: downtime from maintenance issues and operator unavailability
-   Method: cutting out of order to maximize material usage
-   Material: parts sitting on pallets waiting for forklift; some built ahead of schedule
-   Measures: no identified measurement inaccuracies; category likely not applicable
-   Mother Nature / Environment: not applicable to OP7/OP18 scope (welding is in OP22)
-   ~50% of shop capacity is DDG work (more complex drawings); flagged as a method factor

### Open Questions and Next Steps

-   Can the team return to the floor or call Caleb to fill in gaps?
    -   Transportation constraints may prevent an in-person return today; tomorrow possible
-   Questions to ask Caleb:
    -   Why is each operator trained on only one machine?
    -   Are there any measurement inaccuracies in cutting?
    -   How are work orders batched and sent down to OP7?
    -   What is the current utilization rate of the cutting machines?
    -   How does the forklift driver know when to load a sheet onto a cutter?
-   Fishbone to be digitized using company PowerPoint template (template confirmed available)
-   Problem statement still needs to be finalized, including scope, schedule, expectations, and constraints

### Next Steps

-   **Contact Caleb with outstanding questions**
    
    Cover cross-training rationale, measurement accuracy, work order batching, machine utilization, and forklift scheduling.
    
-   **Digitize fishbone diagram using company PowerPoint template**
    
    Template with approved colors and layout is available; avoids manual redrawing.
    
-   **Finalize problem statement for OP7/OP18**
    
    Must include scope, schedule, team deliverables, deadlines, and monetary constraints per slide guidance.

## Full transcript

_Speaker labels are automatic (AssemblyAI). Wording is verbatim machine transcription and may contain recognition errors._

**Speaker A:** No, no, it's another plasma. It was the enclosed laser.

**Speaker B:** That's the enclosed laser which apparently still sometimes goes down.

**Speaker C:** Is that right? This one still also goes down sometimes,

**Speaker D:** which is the one that's like the newest one. But I think sometimes that also.

**Speaker A:** Okay, our question there for these cutters needs to be what's the cause of them not running? Is it operator not being there? Are they actually being broken? The laser or plasma cutters.

**Speaker E:** Probably has other tasks as well

**Speaker C:** with it right now.

**Speaker F:** Is this the machine that they talking about that it gets really hot and so it'll bend so they have to like completely reset?

**Speaker A:** That was the plastic?

**Speaker B:** No, that's the previous one. Because they said when they cut the metal, it would bow up like this and it would make contact with the thing and it manually shut down, or it automatically shut down. They need to manually realign and restart it. Yeah. Also it's got the Italian flag.

**Speaker A:** Where it's Italian engineering.

**Speaker B:** I saw that when we were out there.

**Speaker A:** I was like, that's fine.

**Speaker B:** So I think is that. That's the machine that they said that's like the Cutoff between where OP 7 and 18 are located? Is that what they said?

**Speaker C:** I don't know what this is.

**Speaker E:** Is that even in our scope?

**Speaker A:** Wait, what was your vision?

**Speaker B:** That's one of the cutter. That's one of the straight cutters that OP18 uses.

**Speaker A:** We need to focus on OP7. That's the new rack OP7 going into OP18

**Speaker B:** now.

**Speaker A:** That's going to help support material demand for 18.

**Speaker B:** Yeah.

**Speaker A:** And they just implemented that.

**Speaker B:** Yeah.

**Speaker A:** So that's helpful.

**Speaker G:** Okay.

**Speaker C:** This is just when they said ventilation. Is that just moving parts from the beginning all the way out to the next door?

**Speaker A:** No, ventilation is like airflow, right?

**Speaker E:** Yeah. Ventilation is the ventilation for the ship.

**Speaker C:** Oh, that makes a lot more sense. I thought it was just a turret.

**Speaker B:** No, they're just making vent ducts.

**Speaker E:** He said 70% was ventilation.

**Speaker A:** I don't hear that part.

**Speaker B:** I don't remember.

**Speaker E:** Yeah, I don't even know.

**Speaker B:** I didn't get that. The massive info dump we got, They just got like people welding out in the open.

**Speaker C:** These are all substance.

**Speaker B:** Those are. Yeah, I think those are the complete welding.

**Speaker A:** Those look like they're already welded.

**Speaker B:** Yeah. Or at least some of it. Oh, those could be like the sub assemblies on the pallet.

**Speaker E:** Originally he said that all of these are only ddg, and then he added

**Speaker A:** LHA in there and the other one

**Speaker E:** were on the other. But then there's another

**Speaker A:** lpd. Was the other one I think.

**Speaker E:** Yeah. I thought OBD and LHA were on the other end, and then DDG was over here.

**Speaker B:** Dude, I hate whenever we go to a new place and they throw all these abbreviations at us. I'm like, I have no idea what any of this is.

**Speaker H:** Did we get definitions for lha?

**Speaker B:** No, I think those are the ship. Those are the ship types, but I don't know what they stand for.

**Speaker A:** The only thing I asked is what CPA meant. He had no idea. That was like one of the buildings they operated out of. Not that that matters, but

**Speaker B:** this was. This was over by welding. Oh, yeah.

**Speaker A:** Okay, we're back to the start.

**Speaker E:** Okay, go to the pallet. That one right there.

**Speaker G:** Yeah.

**Speaker E:** I think the only problem with this, there's just no M at all. And they just throw it in the rain.

**Speaker A:** Okay, so this is our. This is our question. Are these pallets waiting on other materials before it goes to OP18?

**Speaker C:** Like if.

**Speaker A:** If the problem is OP18 isn't getting enough materials to meet their demand, why we still have stuff sitting here?

**Speaker C:** I think they're building ahead of themselves.

**Speaker B:** Well, they're building ahead, but they're not building what's due immediately.

**Speaker C:** Yes, they're building ahead on things they don't need yet.

**Speaker B:** Yeah.

**Speaker A:** So that's.

**Speaker C:** Why

**Speaker E:** is this coming from the machines, right?

**Speaker B:** Yeah, this is coming from the plasma cutters.

**Speaker E:** Yeah. Can you imagine how long it takes to find.

**Speaker B:** Well, those have probably been sitting there for God knows how long.

**Speaker E:** I feel like the main bottleneck of

**Speaker C:** this whole thing is offset.

**Speaker B:** Is the what?

**Speaker C:** Offset?

**Speaker B:** Yeah.

**Speaker E:** There definitely needs to be more organization there.

**Speaker B:** It needs to be organized. And I think they just need to be. They just need to have what they need to run. Whether that's the machines working, the manpower, the materials.

**Speaker C:** Yeah.

**Speaker E:** And even if you can't organize this by part, because, I mean, there's just so many different parts.

**Speaker B:** Parts. I don't think it'd be good to organize this by part. I think it'd be good by size, maybe. No, not by size. I was thinking more by sub assembly. So you've got these three parts go to this assem. Sub assembly, have it here, and then just every sub assembly.

**Speaker F:** Yeah, but what if those same parts are going to do a different sub assembly?

**Speaker B:** Then you just put it to whichever ones do first.

**Speaker H:** Did we ask if there's any organization?

**Speaker B:** I don't think we did.

**Speaker C:** No, I don't think so.

**Speaker A:** That's a good question.

**Speaker E:** I didn't.

**Speaker A:** For up 7. It seems to me like they kind

**Speaker F:** of have Organized it into similar shapes. I mean face the fact circles back there, you got the cut out rectangles.

**Speaker B:** They're organized by similar shapes, but none of them are the same size.

**Speaker F:** Where are all these shapes coming from? Are these coming off the machines of.

**Speaker B:** Yeah.

**Speaker A:** So that's coming off of cutters which is opt 7. Yes.

**Speaker H:** Okay.

**Speaker B:** Everything here I think pretty much comes from OP7. Those are being made in OP18 and then being used or sent to OP22.

**Speaker E:** Where are they getting those from?

**Speaker C:** From that rack over there from the.

**Speaker B:** Before it was the racks in that first picture, but now it's that new rack that they said they just put up. The one that looks really rusted.

**Speaker C:** Yeah.

**Speaker F:** Like after the materials come off of OP7 that's not really what we're worried about. We're worried about why is OP7 as

**Speaker C:** a whole taking so correct.

**Speaker B:** Right. But part of the reason why.

**Speaker F:** But that once it gets up to there then it's OP18 having to dig through all that. So that. Yeah, we need.

**Speaker B:** But it's probably part of the problem. Probably part of the problem is.

**Speaker F:** But I mean once it's off of OP7, it's done nine done with OP7 and OP7 is our bottleneck. So what actually is slowing OP7 down because.

**Speaker C:** So you have a full sheet that you're going to be cutting. Let's say you only need a piece this big for the sub assembly you're going to be working on. Then you have this much area. So what they're doing is looking down the line. What do I need to make later that I can fit here?

**Speaker A:** So they're cutting that to maximize the

**Speaker C:** metal usage sitting there and causing this Zone seven. They're cutting ahead of themselves but not cutting what they need. Because you might need five things for this sub assembly. But only one can fit on the sheet. So they have this extra space. So they're going to pull small pieces from down here and put that here.

**Speaker B:** So when you cut that, if you

**Speaker A:** cut what you need, when you need it, you're wasting material. And that's what they're trying to avoid.

**Speaker D:** A pair of c. So they said that the wait time is from waiting for cranes and forklifts to move the material to then use the machines. So we need to get cranes, we need to get forklifts.

**Speaker A:** So the cutting itself isn't the actual problem.

**Speaker D:** That's what the. About 30 minutes and that's across like all the different machines. Just overall the average for both machines.

**Speaker C:** I'm sorry, did you say that's like them bringing it to that zone or

**Speaker A:** that's them loading them.

**Speaker D:** That's them moving the material using a forklift or crane to then use those machines. And so sometimes they have to wait for a frame and wait for a forklift. That's what takes that long. So that's also an issue. Have to wait for the necklace. It could be used in some wells. It could be used in any.

**Speaker F:** Moving material is what it is.

**Speaker D:** I just wanted to double check, but they took an average across all the

**Speaker C:** different machines to see how long so it is.

**Speaker D:** So it's about 30 minutes average from all the four machines. But I also have it broken up.

**Speaker B:** Said three days.

**Speaker D:** Yeah.

**Speaker B:** Okay.

**Speaker D:** I think there's some NAs in here, so that could.

**Speaker G:** Wait.

**Speaker F:** Will you go to the racks that they pull the material from the. Put it on the OP7 machines?

**Speaker C:** There's also all that stuff.

**Speaker B:** This door here, the stuff that's outside. Yeah, yeah, there's more.

**Speaker F:** So it takes them about 30.

**Speaker B:** You can't.

**Speaker A:** You can't pick one of those up.

**Speaker B:** I mean, those sheets.

**Speaker C:** Are those sheets being brought to OXA or elsewhere.

**Speaker B:** Maybe they're.

**Speaker C:** Metal pieces. Then we have to bring it from there to offset and that's that waiting.

**Speaker B:** Was it. Wait, was it that or moving them from those shelves to the machines? Sorry, I thought it was.

**Speaker E:** Yeah, it was what he said. Because I was ready for the 41 to bring it to these shelves and take it to the machine.

**Speaker H:** Use the time to get it from that. The machine would be too long comparative to getting the material to that rack.

**Speaker F:** So how many of these things are they cutting today? Because they have all of this filled and then they have a whole space

**Speaker H:** outside that's filled with them too. I think it more so might be like the type of material, like if they have certain ones that they don't have as much as others. Because if you look at that, it

**Speaker A:** seems like there may be one material that they use a lot for.

**Speaker H:** Yeah. And ones that they don't use as often because each of those was labeled with the type of metal it has.

**Speaker B:** Hey, Olivia, do they use any kind of system to track the inventory levels?

**Speaker H:** So.

**Speaker D:** I know that. I think they use PC, who goes out there and checks to make sure

**Speaker B:** that everything is stocked up okay.

**Speaker F:** And then just to clarify, the 30 minutes is from the metal coming from, like the place that all the metal comes from to get over to the sheet metal building and to be put onto OP7. Like, it's that whole travel around just

**Speaker D:** like in the shop right there.

**Speaker H:** So it's in the shop.

**Speaker D:** It's the shop. Only I'm pretty sure, like, just so it's leaving that material right there waiting for in OP7.

**Speaker F:** Okay.

**Speaker H:** Waiting for forklift to come get it off.

**Speaker D:** It's waiting for forklift to come show up to move that material.

**Speaker F:** So you can't pick that up.

**Speaker B:** Yeah.

**Speaker A:** No, no, no, you cannot.

**Speaker D:** What's that question?

**Speaker B:** What, my question?

**Speaker H:** Yes.

**Speaker B:** Oh, God, I forgot. Yeah.

**Speaker F:** Oh, yeah.

**Speaker A:** Because they have, like, each pallet has their, I guess, bill of material production order on it, and that's kind of how they're currently.

**Speaker B:** Yeah.

**Speaker A:** Keeping track of it. But they're not really, like, they can't go look that up in a database or anything.

**Speaker B:** Right. Because I was kind of thinking, like, well, if they know in advance that

**Speaker A:** I guess they know what's cut. Well, if.

**Speaker B:** Well, hang on.

**Speaker A:** If the stuff you're talking about, this stuff.

**Speaker B:** Well, no, I was thinking about that, but that's not the. Maybe that's not the case because since the material is not waiting to come onto those shelves, it's waiting to be moved onto the machines, then maybe that's not a problem. Maybe. Right. Does that make sense?

**Speaker A:** Yes. Yes, it does.

**Speaker F:** Y' all want to go down, like, the categories for, like, the Fishbone and, like, we could talk about extra manpower. Like, people. Like, there's only one person up there who's, like, making the orders. Would that not be, like, some sort

**Speaker C:** of a bottom person?

**Speaker A:** Was there a Fishbone example?

**Speaker H:** Like, how.

**Speaker A:** How do I fill this out?

**Speaker D:** I don't know how many are up in that shop. We have a lot of. And they have some that are specific.

**Speaker A:** Like, that way. Yeah, Here we go.

**Speaker C:** Because.

**Speaker A:** Oh, I said the effect is the

**Speaker C:** problem up here is the PC, and they're the ones who write the program for the cutters.

**Speaker B:** Yeah. Okay.

**Speaker F:** They're the one who's making. What all needs to go on that thing.

**Speaker C:** Yeah.

**Speaker F:** What all needs to be cut. All the pieces.

**Speaker C:** I think I didn't really hear anyone talking about the fact that waiting on that. Like, the machines are waiting for the programs.

**Speaker G:** No, no.

**Speaker B:** I think we kind of. We were kind of redirecting ourselves in the wrong way. I think. I think we're good on that, so don't worry about that.

**Speaker C:** It seems that they have more manpower NPC than they do in OP7, at least most of the time. So they don't seem to be behind on program, which is good.

**Speaker B:** Hang on, here's a question. If they're losing time, if they're losing an average of two hours a day collectively between those four machines, I think it's 30 minutes.

**Speaker D:** It's 30 minutes across all four.

**Speaker B:** 30 minutes across all four?

**Speaker D:** Yes.

**Speaker B:** Okay. If that 30 minutes was accounted for, how much of that missing like weekly quota would that make up for? Which I'm curious about.

**Speaker C:** Is it worth their over?

**Speaker A:** Okay, let's zoom back out. Those are cool.

**Speaker H:** We need to find the problem first.

**Speaker A:** OP7 can't support OP18 material demand. Why can't they do that? Because they're waiting on the forklift to take the these parts to the actual machine. Why are they waiting on the forklift? Because forklifts are. Okay, that's a question for you, Olivia. The forklift that's being used in OP7, what other operations is it servicing?

**Speaker D:** I think they probably have some specific to the sh. I don't know if he has to go go like across the yard, he may be like how much like the one he was driving back and forth.

**Speaker A:** Uhhuh.

**Speaker D:** Stays in the shop. He was moving material.

**Speaker A:** Cuz they have dedicated drivers for that stuff. Yes, yes. Okay.

**Speaker C:** Yes.

**Speaker A:** Okay. So they're waiting on the forklift to move the parts and machine because the forklift is servicing other areas of the plant

**Speaker F:** and then also for three PCs

**Speaker D:** on that side of the shop.

**Speaker C:** So three are dedicated to writing the programs for all the vending machines. Or three are just dedicated to the whole shop, that side of the shop, outside the shop. But again that doesn't seem to be.

**Speaker F:** And then one person has to work each machine.

**Speaker C:** Maybe one could work too while one's running the other one. But only one person is trained, Is

**Speaker F:** that what they said?

**Speaker B:** Yeah.

**Speaker H:** So there's like one specific person for each machine.

**Speaker C:** Each machine has one.

**Speaker A:** So like that person's not there. Like we get them all.

**Speaker H:** We get them all forklift certified trained. I was gonna say.

**Speaker B:** Yeah.

**Speaker A:** Well it's not the forklift as much as the cutting machine or is the machine.

**Speaker C:** I think the machine is more bottleneck than the forklift. I just think the forklift is also negatively impacting.

**Speaker B:** Well, I guess here's the way we can kind of gauge that is how much time are those machines spent being able to cut but not cutting. Right. Because if they're spending their available time cutting, then we know it's not an issue with a forklift. But if they've got time where they're working but not cutting, then there's time where they're purely just waiting on forklifts. Right. So I guess that would be a question.

**Speaker A:** What does cutting machine Utilization.

**Speaker F:** What is actually taking so long?

**Speaker A:** What's the current utilization of the cutting machine or cutting.

**Speaker F:** I wish we just could have heard him while we were in there, because I feel like. I feel like a lot of these questions are questions that we should ask him. Like, yeah, well, what do you personally think is taking them so long? Is it the forklift themselves or is it cutting on the.

**Speaker C:** But those could be two different bones of this fish. You know, I think it could both be all the fish from D.

**Speaker A:** Yes. Sorry. Would it be. Would it be beneficial to, like, keep going through this, write these questions down and, like, send a couple of us back over there?

**Speaker B:** Well, can we.

**Speaker A:** Is that. Would that be feasible, Olivia, to go back over there today?

**Speaker B:** Recall.

**Speaker A:** Oh, can we call him?

**Speaker H:** Call them?

**Speaker A:** Yeah.

**Speaker D:** Yeah. I mean, I. I'm messaging Caleb.

**Speaker A:** Okay.

**Speaker D:** Problem is the transportation buses. So I don't know.

**Speaker A:** Okay, so that's gonna be in there then.

**Speaker B:** I don't think we're gonna be able to go back down there.

**Speaker C:** Yeah.

**Speaker B:** At any point in person.

**Speaker C:** Tomorrow.

**Speaker B:** Tomorrow. Are we.

**Speaker A:** Yeah. Okay.

**Speaker B:** Okay.

**Speaker C:** Okay.

**Speaker A:** No, you're fine. I'm just trying to think of the best way to do that. So. Yeah, you're right.

**Speaker C:** Let's.

**Speaker A:** Let's get back to our. Keep asking why.

**Speaker H:** Let's keep asking why.

**Speaker C:** Keep asking why. Where are we at with our question?

**Speaker A:** So we're at. So we said waiting on the forklift to move the part to the machine. Forklift services, multiple parts of the facility. How many forklifts are assigned to

**Speaker B:** this area?

**Speaker D:** Sheet metal shop only have two forklifts in the sheet metal shop that they can use due to cost of charging to specific.

**Speaker E:** How many. How many areas are they? Are those deep work?

**Speaker D:** Like, I think it's the whole sheet metal shop.

**Speaker E:** It's just for the sheet metal.

**Speaker D:** Yeah, they have two in sheet metal shop, but they're constrained to do, like, specific charging.

**Speaker A:** So two forklift services. Multiple parts of the sheet metal shop. Two forklift services, the sheet metal shop. Are they only two because of cost constraints?

**Speaker E:** Hear that?

**Speaker C:** Even more forklifts, even more important, even more focus. You're so right.

**Speaker A:** Why are there cost constraints? Because. What would we just say? Because the sheet metal shop only makes so much,

**Speaker H:** there's not enough.

**Speaker A:** You can't justify capital expenditure.

**Speaker B:** Because what they were talking about on the bus, I don't remember who it was, but, like, how cost is kind of estimated. It's like something to do with manners

**Speaker C:** or something like that.

**Speaker B:** Were you part of that conversation?

**Speaker A:** I was not part of that conversation. Okay. I Feel like that's enough lies for the forklift.

**Speaker H:** Do we have to have five?

**Speaker A:** No, it's just calls and like finding the root cause. So. So you can't buy more forklifts.

**Speaker C:** Can you break down on these six M's or the six categories, man, Power, machine material, method measures.

**Speaker B:** Is that how we do?

**Speaker A:** Oh, I guess so, yeah. And then you go what's, what's causing? So I guess the. That would be materials with the forklift materials.

**Speaker F:** I'd say that's manpower because you're waiting for someone to drive over there and do it themselves. We have forklifts. We just don't have someone who's able to constantly run and go grab the stuff.

**Speaker H:** Constantly.

**Speaker C:** Well, you have to pilot.

**Speaker H:** I think it's the machine.

**Speaker C:** I would say machine.

**Speaker A:** Cuz you have dedicated drivers on the forklifts.

**Speaker C:** Yeah, but you don't have enough for. So I think. Yeah, cuz manpower I would put under sor. They only have.

**Speaker H:** I think manpower falls for operators.

**Speaker A:** Okay, so for manpower Britain or something. Oh, seven can't support material demand. Why for manpower? Because one operator trained on each machine. Only trained on one machine. Why are they only trained on one machine?

**Speaker H:** It's a special machine.

**Speaker F:** I have no idea, but that's my guess.

**Speaker C:** I think that's a question.

**Speaker B:** That's a.

**Speaker G:** Why.

**Speaker C:** What you should ask is.

**Speaker F:** Yeah, why is it just one person and why.

**Speaker C:** Why are they only trained on one machine?

**Speaker E:** Olivia.

**Speaker H:** Hi.

**Speaker E:** Do you know why they're only trained on one special like one certain machine.

**Speaker A:** Is there a high learning curve?

**Speaker D:** I don't know. There probably is. They might not have enough people do it. Not sure.

**Speaker C:** I say we just write that one.

**Speaker A:** We're going to add that to our

**Speaker C:** questions list and come back to the manpower one because I don't. Do we need to have the fishbone done today? Yeah, I don't think so.

**Speaker A:** We do not.

**Speaker H:** Oh, we do not.

**Speaker A:** No. Well,

**Speaker H:** Professor Carr.

**Speaker A:** Man, this way. Ellie. Ellie.

**Speaker E:** Mr. Carr.

**Speaker A:** Ellie. Do we need the fishbone done today?

**Speaker C:** Do we need the fishbone done today?

**Speaker B:** Yep.

**Speaker A:** Yeah.

**Speaker B:** Never mind.

**Speaker G:** All this good on it.

**Speaker A:** Getting there.

**Speaker B:** You got a form out there?

**Speaker G:** Okay,

**Speaker C:** we just think there's one that we might need a more in depth conversation with an operator down on the floor. On the floor or I should feel like I can gave us a tour. I don't remember his name.

**Speaker A:** We're going to write down questions and then see if we can get.

**Speaker B:** I know one of them was Caleb.

**Speaker C:** We'll revisit that later.

**Speaker B:** Yeah.

**Speaker A:** Okay.

**Speaker E:** Well we can have her ask Caleb.

**Speaker A:** Yeah, that's going to be the best out here.

**Speaker C:** Move on to my material.

**Speaker A:** Yeah. Let's see that said material. Why can't op 7 support up 18 material demand.

**Speaker C:** I feel like 7 has their material but it just can't work it to supply 18's material.

**Speaker A:** Why?

**Speaker H:** The machines are broken some of the time. So they're not producing at the rate that 18.

**Speaker A:** Cutting machines part building machine downtime. Why do they have downtime? Maintenance issues. Operate operator not issues. But why, why, why, why are cutting machines have downtime? Because they're broken or operated.

**Speaker C:** Not available.

**Speaker D:** He said. When I said that they just.

**Speaker A:** Okay. Yeah. So not cross trained. Why are they not cross trained?

**Speaker C:** You know why they're not frustrating them

**Speaker A:** just because not they don't have.

**Speaker D:** I mean I got an answer but it wasn't a very good answer.

**Speaker A:** So.

**Speaker G:** Okay. Okay.

**Speaker H:** I mean it wasn't a good excuse.

**Speaker G:** How's it going in there? Good.

**Speaker C:** They're going to the hotel.

**Speaker B:** They're done.

**Speaker A:** They're gonna casino.

**Speaker B:** Losing precious gambling time.

**Speaker H:** Seriously.

**Speaker C:** Thank you.

**Speaker D:** You're welcome. Have one person working machine. They're out one day.

**Speaker A:** It's like what do you do?

**Speaker C:** Nobody works machines.

**Speaker D:** Which you know that's a lot of

**Speaker H:** problems that they have too. What is the. The typical opera from one of those machines On a normal we works how

**Speaker D:** many gallons they get overtime style?

**Speaker E:** Like 50, maybe 60.

**Speaker C:** I also had a general question.

**Speaker B:** Do you.

**Speaker H:** How many shifts do y' all do we have?

**Speaker D:** Three to four.

**Speaker B:** Okay.

**Speaker D:** In the summer their hours are a little bit different. They do like they start really early

**Speaker B:** in the morning so they're not working heat.

**Speaker D:** So it kind of gets a little different. But like we are first shift right now. First shift usually goes from like six to two.

**Speaker H:** That's like

**Speaker D:** we have some that go back to one as well. The whole workers in the summer since it's so hot they can really get off.

**Speaker B:** Okay.

**Speaker D:** But then we have second shift that's supposed to start around 2:30 and they go to. And then we have a third shift the night. But then I think there's also also a fourth ship that's somewhere some they kind of overlap too.

**Speaker B:** Okay.

**Speaker H:** But

**Speaker C:** thank you.

**Speaker H:** You're welcome.

**Speaker D:** The answer is basically they just haven't done it yet.

**Speaker E:** I know.

**Speaker D:** I was like this isn't a very good answer.

**Speaker G:** But.

**Speaker A:** No, it is an answer that it.

**Speaker B:** It's. It's an answer we do work with

**Speaker H:** like

**Speaker A:** yeah, well it's nothing done.

**Speaker H:** What do we have right now?

**Speaker A:** Cutting machine downtime caused by maintenance Issues and operators not available. Which I guess is machine

**Speaker H:** you ask.

**Speaker F:** I. Yeah, I think we're going to

**Speaker C:** do it like material for 7 machine number issue. But material for 18 is based off the product from 7 which is down because the machines are down. So I think it is kind of under the scope of 18.

**Speaker B:** Is it? Well it's that and it's also been making stuff out of order. I think it both.

**Speaker F:** Why don't we just move on to method?

**Speaker B:** We'll come back to method.

**Speaker A:** What kind of method?

**Speaker C:** Cutting things out of order.

**Speaker G:** There you go.

**Speaker A:** Why are we cutting things out of order?

**Speaker H:** To maximize the amount of each sheet

**Speaker C:** that can be used and minimize scrap.

**Speaker H:** And minimize scrap

**Speaker A:** material usage.

**Speaker F:** It's causing it to messy.

**Speaker H:** Yeah. Like is that cosmic?

**Speaker D:** Could we just have a, like a scrap pile?

**Speaker B:** They have scrap piles.

**Speaker A:** They have scrap piles.

**Speaker F:** So like would it be,

**Speaker B:** would it

**Speaker F:** be able to like stay cleaner if

**Speaker H:** you just cut what you needed then

**Speaker F:** and then you can have a scrap pile.

**Speaker A:** You'd waste more material though.

**Speaker H:** Well then you could go back and use it.

**Speaker E:** Right.

**Speaker H:** Like isn't that the same thing? Depending on what I get what they're

**Speaker F:** trying to do, they're trying to like plan that way everything's cut and like that whole sheet of material is used the best it can be. I get what they're doing. I'm just like. It's making the whole floor a mess.

**Speaker B:** Am I wrong there?

**Speaker H:** Why couldn't they have an area where they just like go back and get it?

**Speaker B:** Well here's my question and correct me if I'm wrong, but they have. They're making stuff out of order. So they don't have half used sheets, they don't have scrap. But then they have massive piles of scrap.

**Speaker H:** Yeah, they still have scrap.

**Speaker A:** So it's not usable scrap, is it?

**Speaker B:** I thought, well then why are they saving it?

**Speaker F:** Yeah.

**Speaker H:** By the way, why don't they just throw it?

**Speaker C:** That might just like they have those scrap metal. Is that what you're talking about?

**Speaker B:** No, but they had like little shelves on the floor and on each little slit would be like a half used sheet of sheet metal.

**Speaker C:** Was it half used or is that what a piece is supposed to look like?

**Speaker B:** It was half used. Like half the sheet had stuff cut out of it and the other half was.

**Speaker C:** Well then maybe that's just what they put in.

**Speaker A:** Can we get the pictures back?

**Speaker H:** How long does it take to get.

**Speaker B:** I don't know. That's a good question.

**Speaker D:** If it like it'll keep me logged into this as long As I don't like this but I only have one they're called.

**Speaker A:** I thought the Microsoft Authenticator was bad

**Speaker H:** that we would plug into the computers

**Speaker D:** but that one, if you unplug it

**Speaker H:** it would shut off the whole computer

**Speaker D:** at least this one I can like,

**Speaker F:** you know, use mine

**Speaker C:** try and keep it from falling. I know I said I'll take care of the computer and then that's the one thing I did didn't do. I like to leave a lot to do desire cuz then I never disappoint we could probably have like multiple machine sections on additional cuz he has eight

**Speaker A:** slots and there's only for real.

**Speaker F:** So the operator is who decides what all is getting like the operator sitting up there is who decides what all is getting cut on the piece of

**Speaker C:** sheet I believe that's.

**Speaker B:** Yeah,

**Speaker A:** yeah so go, go to that third one. This stuff?

**Speaker B:** Yeah, I think so. There was more. That wasn't the only stack there might be. I'm looking at the photos on the right seeing if I can see another.

**Speaker F:** It's normally 40 hours.

**Speaker D:** It's usually about 40.

**Speaker C:** I think that's finished product.

**Speaker D:** No, I don't think it's every person.

**Speaker B:** Well that's 18. The stuff I saw it was all in seven. So go back up to that other photo. There were like three or four stacks of stuff similar to that. Is that.

**Speaker F:** Yeah.

**Speaker B:** What is that? Is that stuff they're gonna use later or are they gonna get rid of it or did they just wait and dispose that?

**Speaker F:** Olympia they could have made a lot

**Speaker H:** more out of that though.

**Speaker A:** This material is that just scrap?

**Speaker D:** I don't know if that's material that's been cut and just hasn't been placed where it needs to be placed yet.

**Speaker A:** Well it looks like they've cut it out already.

**Speaker B:** Well it's like some of those looks like there's not much space left to do anything with but some of them do.

**Speaker D:** Yeah it may have the pieces that

**Speaker B:** have been cut like it looks like

**Speaker A:** they've cut out pieces they need but like this part is maybe still usable.

**Speaker C:** Like I.

**Speaker D:** They might try to fit different ones

**Speaker B:** but they've got different shapes.

**Speaker H:** I don't know.

**Speaker D:** I can try.

**Speaker A:** Yeah, I don't know but that's the way the as bat is but yeah.

**Speaker D:** Are you wanting to know like if it's just sitting there waiting to be scrapped or are we still.

**Speaker A:** So we're trying to get to the root cause of they're cutting it out of order because they're trying to maximize

**Speaker B:** material usage but then there's stuff like this.

**Speaker A:** But then there's stuff like that.

**Speaker D:** Yeah, it may just not. I'll ask, but maybe they don't have the.

**Speaker C:** These are pretty minimal spaces. Like, you might have a piece that's this big, but that might be pretty much.

**Speaker B:** We'll go down to the picture that's below that with all the small parts

**Speaker A:** we can kind of see.

**Speaker B:** Again, there's not really a lot of small parts there.

**Speaker C:** There's like a few, but that probably is about this big.

**Speaker B:** Yeah, but that looks old. That looks like that's been sitting there for a while. I don't know if they're using that.

**Speaker C:** It's also assuming it's the same material.

**Speaker A:** They gave me some 5s or something like.

**Speaker B:** Well, here's. Oh, hang on. Here's another thing I'm kind of curious about. So go back to that other photo. Real. They're cutting out these, like, massive circles, like all those rings in towards the back of that photo. So they have to cut all that out. Are they using some of that inner stuff? So they're cutting small circles? And that bigger circle around that bigger circle around that, or are they just cutting. It's each one of those. All that stuff in the middle is getting wasted.

**Speaker C:** I would assume that the people who are writing these programs are pretty good.

**Speaker F:** Yeah, they're thinking this.

**Speaker A:** I would assume.

**Speaker B:** I. I would assume, but I don't

**Speaker F:** know it on it.

**Speaker C:** Can never assume.

**Speaker B:** Yeah, I was going to say I. Yeah, why not?

**Speaker A:** Hey, what you say,

**Speaker B:** Samuel? You and I both learned a tail. Kirk. I know.

**Speaker C:** I know what you did.

**Speaker B:** They just don't get it. They don't get it.

**Speaker F:** I think the of our thing is the fact that truthfully is the method. The fact that they're cutting all these pieces that we don't need, trying to use all the sheet metal and taking those. Taking the time to make those extra cuts. Whenever they need to be moving on to the next piece that that sub assembly needs,

**Speaker A:** you tell them I agree.

**Speaker G:** Right.

**Speaker H:** Okay.

**Speaker F:** So I say scratch. Shiny. No, but I feel like that would. That has to be what's. That's why OP18 isn't getting the pieces that they need because they're too busy trying to make the most out of

**Speaker H:** each of these sheets.

**Speaker C:** I. I agree. That's definitely a factor because that does increase the cutting time.

**Speaker B:** But that's.

**Speaker A:** That's not the biggest problem we have.

**Speaker F:** I think the method of not getting all those pieces that you need for that part that you're supposed to be working on today in OP18 not getting them all done as fast as you can. I think that's the problem of their method and that's why OP18 is struggling for that material, I think.

**Speaker C:** How many are you making today? You can look at those sub assemblies and you can try to fit in those.

**Speaker A:** That's not what we're doing right now.

**Speaker C:** That's too far ahead.

**Speaker F:** I. I just like am confused on

**Speaker C:** how right now we're just trying to diagnose why they're doing what they write that up.

**Speaker A:** But we're not solving any problems right now. Yeah.

**Speaker C:** Our brains. We all want.

**Speaker H:** So I don't know.

**Speaker A:** It must be consultant tell me there's some 5s then.

**Speaker B:** Yeah.

**Speaker C:** So where are we at?

**Speaker A:** We are at. What was the other.

**Speaker B:** Did you have the

**Speaker F:** method? Did we finish method?

**Speaker A:** We just got to.

**Speaker B:** Well, I think that. I think that was the one order

**Speaker A:** to maximize material usage. Yeah, I don't think we need to go any further than that for you know, unless y' all think we need to write something else.

**Speaker H:** And I think one of these method is. But slows operation is the drawings.

**Speaker D:** The instructions.

**Speaker C:** Oh yeah, yeah, yeah. The drawings.

**Speaker A:** Yeah.

**Speaker C:** Too complicated because I assume this fishbowl is encapsulated 18 and 7.

**Speaker A:** Yes.

**Speaker C:** So yeah.

**Speaker E:** Remember that would only be for.

**Speaker B:** Well, how much. How much of the stuff that they're making is DDS with the complicated instructions?

**Speaker A:** 50%.

**Speaker B:** It's half of it.

**Speaker A:** Half. Half of shop capacity is DDG or.

**Speaker B:** DDG.

**Speaker A:** Sorry, half of the capacity.

**Speaker D:** About 94 heads total. Two shifts. Second shift has about 21.

**Speaker A:** So heads are people working.

**Speaker B:** Yeah. For.

**Speaker A:** For op7. Yes.

**Speaker H:** The.

**Speaker A:** Yes. We don't care about 22. What was the next M. Measures.

**Speaker C:** Measures.

**Speaker H:** Measures.

**Speaker A:** Tape measures like leaders.

**Speaker H:** Measurement data. Gauging the faulty bad test or wrong inspection points. Faulty gauges, bad tests or.

**Speaker A:** All right, so that's a question. What's the defect rate of stuff compared to off the cutting machines?

**Speaker F:** Oh, would that be like if the thing.

**Speaker A:** Like if they cut something wrong, they're going to have to recut it, which is.

**Speaker F:** Then they'll probably just have to scrap it.

**Speaker A:** Yeah, they would, but then that's time loss.

**Speaker B:** The to or they scrap it or it just ends up in that pile

**Speaker F:** over there somewhere and like that machine that stops crap. That machine for whenever it stops whenever the material like bends up. Like is that material that it was cutting like that was so blurry.

**Speaker A:** I'm sorry, that was package.

**Speaker F:** Is it like useless or can you still use.

**Speaker A:** Wait, are we talking about 18 when they bend it.

**Speaker F:** The will stop if the.

**Speaker A:** The plasma cutter.

**Speaker F:** Yeah. Like, can that material still be used or is it.

**Speaker A:** Yeah, they said they just have to reset the machine.

**Speaker H:** Oh, okay.

**Speaker B:** So.

**Speaker A:** But that material is fine. Like, they're not. They're not scrapping material because of that.

**Speaker C:** Okay.

**Speaker B:** It's just slowing them down. That's not wasting anything.

**Speaker H:** Even if your machines, materials, and people are perfect, a flawed measurement system will trick you into seeing problems that do not exist or missing defects. This is from Google, so that's pretty cool.

**Speaker A:** Thank you, Gemini.

**Speaker C:** Mr.

**Speaker E:** Car.

**Speaker B:** Yes.

**Speaker E:** What is the measures category really about for the.

**Speaker C:** For the fishbone diagram? Measuring Sk.

**Speaker E:** No, it says measures. Says measures on the fishbone diagram.

**Speaker B:** Yeah.

**Speaker G:** So you may not have bones on each one of those categories. So measurements. Sometimes there's a problem and there's a category of, like, how we're measuring it, the measurements being incorrect. Et. You're saying. You're asking, I guess, should we have something on each one of those categories?

**Speaker B:** No, we're asking what that category is.

**Speaker F:** Yeah, we don't fully understand.

**Speaker A:** Like, how would you define that category?

**Speaker G:** Oh, okay. So man material, method, Mother nature. And I think measurement is it measure.

**Speaker A:** It's measure.

**Speaker G:** Measure. So measure would be. If a problem, let's just say is that I have some type of product going out and it's wrong size. So the category measure would be. Okay, we're not able to measure the length of this thing accurately enough, et cetera. So it could be a bone in there. It's inaccurate measurements on the length. So that's just another category in the fishbone diagram. And you may or may not have, you know, if your problem is associated

**Speaker A:** with

**Speaker G:** where it can come wrong, like material availability or material location. You may not have anything.

**Speaker F:** Yeah, I feel like ours really. I don't think ours.

**Speaker A:** I don't think environment either. Maybe after.

**Speaker F:** I don't think ours has it because, like, I don't think it's an issue to figure out how much. Like, I don't think it's an issue for our operators to figure out what needs to be cut on their sheets. Like, I guess that's the only type of measurement that I would think of. And I don't think that's part of our problem.

**Speaker G:** Measurement doesn't have anything to do with your problem. Step two, if the measurement doesn't play in at all.

**Speaker D:** Yeah.

**Speaker F:** And like, some of them, like, we kind of have. What's the one that we look. We kind of have like 2 for

**Speaker E:** the cutting out of order 1.

**Speaker B:** The machine machines the forklifts.

**Speaker F:** So we might just have like two under the machines category instead of.

**Speaker B:** Yeah, yeah.

**Speaker H:** Okay.

**Speaker F:** We were just kind of confused on what it actually meant.

**Speaker G:** No, you won't always have all of them. Those are just the general categories to make you think about. Is there anything in this category? Right. So I would say no, probably not in Europe.

**Speaker B:** Yeah.

**Speaker G:** So the other team, where they're. They've got paint and two part epoxy and etc. Measurement will be a key because they've got a wave part A, they've got a wave part B. If they put the kits together. So they would probably have something under measurement. Right.

**Speaker H:** Okay.

**Speaker E:** One thing that we could just ask for measurement just in case. We could just ask that Caleb guy if they do have inaccuracies in measuring the cutting. Like they ever run into that problem.

**Speaker F:** Yeah. Or if like the operators say that this is going to be cut on this piece of metal and then the metal like isn't as big as they thought.

**Speaker E:** We just don't know if there's any inaccuracies. Season measurement.

**Speaker A:** Yeah.

**Speaker E:** I mean, we never really saw or they never told us about anything.

**Speaker C:** I feel like if it was something that was consistently happening, they probably would

**Speaker B:** have brought it up.

**Speaker H:** I don't know.

**Speaker F:** I mean, we walked through that really fast. It was. It was a really big.

**Speaker E:** If he says not really, then we just.

**Speaker B:** Yeah, she got that.

**Speaker A:** We need to get Chloe back in here. So we need to get back in here.

**Speaker C:** I know where she.

**Speaker A:** No, that's Samuel.

**Speaker C:** Something that might be worth adding under machine or material. Just talking about how one of their cutting will like melt the thin piece. Not.

**Speaker A:** Hold on, I'll z down a second.

**Speaker C:** How one of their cutting machines, when it's cutting this, the thin stuff, it gets too hot and it'll knock the nozzle. That might be worth the other material.

**Speaker B:** I think we. We brought that up a witch magnets for it.

**Speaker F:** But each time that you do it, then you have to go and replace the magnets. So it's kind of just like a hassle.

**Speaker B:** Unless. Or would they have. Are they moving the. Is it a hassle because they're moving the magnet across that same sheet? Or is it a hassle because they're putting it on each sheet?

**Speaker F:** I think.

**Speaker B:** I think because if the sheet's so big and they don't have enough magnets. Right. And they have to move that magnet, then they've got to stand there and watch the machine to move the magnet. That's the reason why.

**Speaker F:** Yeah. Like if they don't have a magnet on which machine.

**Speaker B:** So on the one where the metal bows they had a way to keep it flat and it was to put magnets on it to weigh it down to stop it from bowing.

**Speaker H:** Okay.

**Speaker B:** But if they. If they have to move it. If the sheet's too big, they don't have enough magnet. They've got to move that thing along where it's being tied.

**Speaker F:** I feel like also because think about how high power those things are. Like if you're cutting like something that looks like a candy cane and you're probably good. Like you can't just tie down each four of those sides. You probably have to put it closer to where it's actually cutting around.

**Speaker H:** I don't know what I'm saying.

**Speaker F:** Okay.

**Speaker E:** No that makes sense.

**Speaker B:** I mean I guess it's just a question of how thin is the material that they're cutting.

**Speaker A:** Right.

**Speaker F:** But I would just put that. I think machines have a lot of issues.

**Speaker B:** Issues that yeah. The problem. Yeah.

**Speaker C:** I don't think we need to go five wise down that tree. I think it was just a good thing to do.

**Speaker A:** Yeah.

**Speaker F:** Okay. So we have and we don't think anything for measures and in mother Nature. I think unless we need to ask about those scraps that they get delivered to outside before they get moved inside. We can ask them if they've had any issues to where those have been out there for too long. And then once they bring them inside from nature.

**Speaker B:** We put plant wiped out by hurricane.

**Speaker F:** That's not a joke.

**Speaker H:** Whenever it gets cold they don't want that because they cancel their fingers. And sometimes they'll.

**Speaker F:** Yeah.

**Speaker H:** Mess.

**Speaker F:** I wouldn't want to go.

**Speaker E:** I was thinking about earlier during winter like and even if you have gloves on it kind of messes with it too.

**Speaker A:** Yeah.

**Speaker H:** She said in the mess with her

**Speaker D:** like I don't know if but are

**Speaker F:** we actually welding in OP7 or OP8?

**Speaker B:** No.

**Speaker A:** 22 is the welding.

**Speaker F:** Okay. So we don't even have to work.

**Speaker C:** Correct.

**Speaker B:** Yeah.

**Speaker F:** But mother nature we can add.

**Speaker B:** I don't think we need anything.

**Speaker C:** Yeah. Is the the other girl who's working with the fake can scene. She seems the fact that sometimes some stuff gets a little ruined outside. But I don't know how her blood is to our sheep.

**Speaker B:** Yeah.

**Speaker C:** So I say we just do that.

**Speaker A:** Olivia, is Chloe coming back?

**Speaker D:** She asked if she needed to do a yes.

**Speaker F:** She would probably be really helpful.

**Speaker A:** She just seemed to know more about the process. Not that you don't but.

**Speaker G:** Yeah.

**Speaker A:** Yeah.

**Speaker E:** Okay.

**Speaker A:** Can't believe I Think so. I mean, it looks really good. Look at that.

**Speaker H:** That looks.

**Speaker F:** Now we kind of have to, like, decide which one we think is the. The most significant root cause.

**Speaker A:** I think we need the fancy girl handwriting. Make it look good.

**Speaker H:** Oh, are we just gonna take a picture of this?

**Speaker B:** Take a picture?

**Speaker C:** Yeah.

**Speaker H:** No, I mean, like, if I rewrite it, then we'll take a picture of mine. Because we can't do anything on our computers right now.

**Speaker E:** Yeah, never.

**Speaker B:** Well, we probably. Well, we could rewrite it and then have her take a picture.

**Speaker D:** Wrote that down.

**Speaker F:** I. I feel like that's not going to be our.

**Speaker H:** You can ask.

**Speaker F:** I don't think that's going to be our main cause. We could, like, save that for tomorrow.

**Speaker A:** Does Engels have a Canva account? Canva.

**Speaker H:** Oh, We need Canva Pro right now. We can do it on PowerPoint.

**Speaker E:** We can draw it.

**Speaker D:** Sorry, I don't think we could draw it. Yes, we do.

**Speaker H:** We do have.

**Speaker F:** We can do it on Excel, too.

**Speaker H:** Could we use the PowerPoints? Yeah. Oh, yeah.

**Speaker F:** They.

**Speaker D:** I think they want y' all to use. But I can pull that up.

**Speaker A:** Oh, there is a template.

**Speaker H:** Yeah.

**Speaker D:** Yes, we do. Well, we have, like, specific colors and slides going. News for us to use when we do stuff.

**Speaker E:** Okay.

**Speaker D:** So what do we think?

**Speaker A:** Yeah, that'd be awesome.

**Speaker H:** That way we don't have to worry about deciding.

**Speaker A:** We just.

**Speaker D:** But they have, like, different options.

**Speaker H:** I don't feel. Caroline. Wow. I just think.

**Speaker F:** I don't even know. I think if the main problem that we are trying to solve is the fact that OP18 isn't getting their materials fast enough. I think my personal thought on the main problem is the fact that we aren't cutting all the materials that OP18 needs first. We're cutting everything else first in one piece. So we're going one at a time.

**Speaker B:** Everything. Every cause is the outer order thing.

**Speaker H:** We have these two options.

**Speaker D:** Me, personally,

**Speaker A:** everything. Everything they're cutting is for. It's just not for.

**Speaker H:** Because doesn't that fall under, like.

**Speaker B:** Well, the immediate.

**Speaker A:** Like, they're looking way down the line, right?

**Speaker B:** Yeah, Yeah. I mean, if they should cut stuff in order.

**Speaker D:** All right.

**Speaker B:** I think. I guess they said stuff sits there for weeks.

**Speaker A:** Like, how are these work orders coming in? Yeah, the work orders, like, initially are coming. Are coming from other departments.

**Speaker B:** No, they're coming from that, like, up high.

**Speaker A:** But they're getting the work orders from other parts of the shipyard. Like, they're not just making up. Let's cut, blah, blah, blah.

**Speaker B:** Right.

**Speaker A:** But they should.

**Speaker F:** Wait.

**Speaker B:** You agree they need to send.

**Speaker D:** That's the.

**Speaker B:** Maybe it's. How do they send down those orders?

**Speaker A:** Do they do it like 50 at a time?

**Speaker B:** Do they do it 100 at a time? How many of those sub assembly part lists get sent down at a time?

**Speaker H:** Slide.

**Speaker A:** Oh, the slide has the.

**Speaker B:** The points.

**Speaker H:** No, the slide. This slide for the problem description. That's what he wants us to address

**Speaker C:** in the problem description.

**Speaker H:** The scope of the problem.

**Speaker E:** 1018.

**Speaker D:** Okay, so the scope of seven has three heads. Each shift of 18 has eight in total.

**Speaker C:** Okay, so there we could have enough to run every machine at once if it were. But I guess because they have two of the same machine.

**Speaker A:** OP18 has three.

**Speaker B:** No, eight.

**Speaker D:** OP18 has eight total. OP7 has three each shipped.

**Speaker F:** And this isn't including the operator.

**Speaker H:** Right, this is.

**Speaker A:** Those are the operators.

**Speaker E:** What do. What do the other two.

**Speaker A:** The opera is the one on the floor. You mean the supervisor?

**Speaker F:** Yeah.

**Speaker B:** Isn't the guy production?

**Speaker F:** That's the one who's making them.

**Speaker B:** So wait, here's kind of my thing. So if they have. With the operators, there's eight in 18 total. I think I was talking about the math on the bus of how many people. They have a quota of 10 a day per person. Right. So they need six people to be able to make 300 a week in OP18. In OP18, yes. There's two people extra, mathematically. Right?

**Speaker A:** Yes.

**Speaker F:** That's how you're counting their split.

**Speaker H:** I don't have a. Clearly she has it because I asked about how many hours they work a week, how many people they have in a day and whatnot. How that's what happened.

**Speaker B:** Right, but if they're. I'm thinking. I'm thinking less of how many hours they work. If their quote is 10 a day, their quota is 10 a day. They could do it in an hour, they could do it in 12. Right.

**Speaker H:** If that's eight per shift, are eight total every day?

**Speaker B:** Yeah.

**Speaker H:** You know what I mean?

**Speaker B:** Yeah, I think I get what you're saying.

**Speaker H:** Cuz if it's 8 per shift, the quota per day changes.

**Speaker D:** He said when they're not. When the machines are down, they usually just move them to like either OP18 or OP22. So they can work those. But I think it sounds like just the machines, I guess they can work

**Speaker H:** than some of the other things.

**Speaker C:** So.

**Speaker D:** And then it's eight total. But he said usually first shift has about five.

**Speaker H:** So there's.

**Speaker C:** So they kind of overlap.

**Speaker D:** Oh, that's for ob. Sorry.

**Speaker C:** So they kind of overlap into the next shift.

**Speaker D:** Yeah. So if they're not able to do use the machines on seven, they'll usually try to send them to another.

**Speaker H:** And then for OP7, if there's three people total in each shift.

**Speaker D:** Yes.

**Speaker H:** Okay.

**Speaker D:** He said OP7 has three heads each shift. OP18 has eight and usually her shift has around five.

**Speaker B:** So then they're working an average more than one whole shift. Okay.

**Speaker G:** All right.

**Speaker C:** So are we done with our fishbone?

**Speaker A:** Yeah, I think so.

**Speaker C:** So now we're on to defining the problem containment plan.

**Speaker H:** I think we need to find.

**Speaker A:** We need to find.

**Speaker C:** I think. Yeah, I kind of agree. We needed to define a little beyond the one cell.

**Speaker A:** Okay.

**Speaker H:** Cuz our description needs to fit all those things.

**Speaker C:** Keep questions out. There was

**Speaker A:** this was in the PowerPoint.

**Speaker H:** Yeah.

**Speaker A:** What are those questions?

**Speaker H:** Yeah, Please do a description of the or describe the problem. Problem statement should be well thought out. Should include the schedule the problem provides, what the problem is and what it is not, defines expectations and deliverables by the team and clarifies any deadlines in any monetary constraints as.

**Speaker B:** Go ahead, write it down, May.

**Speaker H:** So the first one is just that we should have it well thought out, which kind of was what we do

**Speaker B:** throughout the process, among the other things.

**Speaker H:** But should include the scope of the problem, which help focuses the team. So what I originally had written down was that it's how our pieces are moving throughout the system. Like the flow of that and it's the best way to move the flow. And then what was the second. The time it takes to move the metal sheet. And then the time it takes to

**Speaker C:** move the metal sheet.

**Speaker H:** This is within this.

**Speaker F:** I think the flow of it's fine though. Like how it flows from like coming in like it just goes in a straight line.

**Speaker H:** When I was talking about that, I was more so thinking about how the flow of materials comes out of all 17 and how it is sorted before being sent to all 18.

**Speaker E:** What was the thing that they said they cut out in between 7 and 18? Wasn't there something in between?

**Speaker B:** There was that rack that they. Of whole sheets that 18 would use for their straight cuts.

**Speaker A:** They were just getting it from the UP7. Like there was just that one. Yeah, that's. That's the new one that yeah. Is dedicated.

**Speaker B:** We all know what it is. So it's fine.

**Speaker E:** They cut out like an inspection period, like an inspection space or something

**Speaker A:** is where that was.

**Speaker F:** They cut out them having to walk all the way back to the front. I think I might just thr something around.

**Speaker A:** Okay,

**Speaker H:** so do we want to add anything to the scope of the problem on or take anything out.

**Speaker F:** What is the scope of the problem?

**Speaker H:** How do pieces move through both areas? The time it takes to move the metal sheet. There's all these different slide options.

**Speaker B:** Like.

**Speaker D:** I have it. I've created a special. I guess I have you I'm telling you.

**Speaker H:** Oh I'm not sure what I already said but whenever. Have a more accurate prediction of okay. In order to do the next piece on time. When do I need to ask for the forklift? That makes sense. Like how far in advance so that maybe I can ask for the forklift, finish the task I'm doing and then when I'm done with that task.

**Speaker A:** Where's our question, Shay? I guess I can just ask how. How does the forklift driver know when to load a stock metal piece onto a cutter? It's like let me go grab a piece. Like time for my smoke break.

**Speaker B:** No release.

**Speaker A:** Yes. From the yeah from or from the

**Speaker C:** other rack to the

**Speaker H:** oh and then also from the scope of it is training recommendations. Like if the author he's still online.

**Speaker A:** You have like a discord server going.

**Speaker H:** Like is it is this Microsoft Team

**Speaker F:** close to green dots?

**Speaker D:** Yeah. It's okay. It's okay. He used to work for actually he

**Speaker F:** taught everyone thinking that I'm standing well

**Speaker D:** not a sheet on a shop obviously but but

**Speaker H:** okay.

**Speaker B:** Yeah.

**Speaker G:** They

**Speaker D:** the operator asked for them to come.

**Speaker H:** I need to stand up.

**Speaker A:** Yeah. It's almost five minute break time here so. No, just close the window.

**Speaker C:** What?

**Speaker A:** Close it all the way.

**Speaker H:** I like your feet close up. This is.

**Speaker F:** No, that's too bright.

**Speaker H:** I feel like we need to light.

**Speaker B:** I I yeah, I, I think dark.

**Speaker H:** You like dark better.

**Speaker C:** Yeah.

**Speaker F:** Oh the

**Speaker C:** is this are we taking a break right now?

**Speaker A:** Yeah, we're going to take a five minute recess.

**Speaker H:** Okay.

**Speaker C:** I just wanted to stand up. I didn't need to stop.

**Speaker H:** No, I need to.

**Speaker C:** I think it's a good idea.

**Speaker F:** Okay guys.
