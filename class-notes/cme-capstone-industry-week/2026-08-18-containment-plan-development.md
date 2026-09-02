# Containment plan development

- **Date:** Tuesday, August 18, 2026 at 01:10 PM CDT
- **Course / folder:** CME Capstone Industry Week (Ingalls sheet metal shop, OP7/OP18 project)
- **Source:** Granola meeting `f49b9444-fe31-4f92-8e46-032fb10ffcce` (AI summary + full transcript)
- **Transcript length:** ~20,947 words

## Summary (Granola AI notes)

### Problem Statement

-   Core problem: OP7 cutting machines can’t support OP18 material demand
-   Root cause identified: not enough uptime on OP7 cutting machines
-   OP18 is waiting on parts from OP7, not searching for already-cut parts (confirmed)

### Fishbone Diagram Status

-   Fishbone complete (brain-dumped, needs cleanup)
-   Root causes narrowed to two main branches: machine and method
-   Five Whys not required for every branch; circle 2-3 most significant causes
-   Is/Is Not table started but not finished; needs completion

### Machine Branch: Key Findings

-   Machines down frequently due to maintenance
    -   Oldest machines operational ~60% of the time
    -   Defective parts from machines: not a significant issue
-   Only one machine running at time of visit (not all broken, just not in use)
-   Three operators for four machines; operators only trained on one machine each
-   Each machine runs ~5.5 hours/day when operational
-   Machines use both forklift and overhead crane for loading

### Method Branch: Key Findings

-   Forklift communication is poor: operators flag down Trinidad rather than calling
    -   Estimated ~30 min/day lost waiting on forklift
-   Production control sends work orders too far in advance
    -   Operators cut future parts to maximize sheet usage, consuming limited uptime
    -   Cutting out-of-sequence parts creates large staging pile of unneeded inventory
-   OP7 goal: maintain a two-week lead time for OP18
    -   End-of-month planning meeting proposed to map out next month’s cuts week by week
-   Out-of-sequence issue: OP18 sometimes pulls incomplete pallets before OP7 finishes

### Identified Bottlenecks (in order)

1.  Communication from material yard: unclear what raw stock is needed per week
2.  Flagging down Trinidad (forklift operator) to load machines
3.  Production control cutting parts too far in advance
4.  OP7 operators not cross-trained on all machines
5.  Unorganized staging area between OP7 and OP18

### Is/Is Not Table (in progress)

-   Problem: organizational flow of materials from OP7 to OP18
-   Who is affected: OP7 operators, forklift operator, OP18 operators, downstream OP22
-   Who is not affected: consumers, Navy (end recipient), unrelated sheet metal ops
-   What is not the problem: number of forklifts, number of operators, OP22 and beyond

### Short-Term Containment Plan (D3)

-   Material yard: create inventory plan for raw materials needed per week
-   Forklift communication: issue walkie-talkies to operators and Trinidad
-   Cutting sequence: cut linearly by what is needed this week; accept more scrap short-term
-   Cross-training: train all three OP7 operators on every machine (one week = short-term at ship-build timescales)
-   Pallet readiness: introduce red/green tags on pallets to signal complete vs. incomplete

### Long-Term Solutions

-   Install signal light (andon-style) so operators press a button to alert Trinidad
-   Monthly planning meeting to define cuts week by week for the following month
-   Cross-train OP18 operators to cover OP7 during absences or machine downtime
-   Improve organization of cut parts by ship class (DDG, LHA, LPD) with labeled/color-coded pallets

### Open Questions

-   Is OP18 waiting on parts to be cut, or searching through already-cut parts? (ask Caleb)
-   How far in advance is production control sending cut instructions?
-   Does OP7 have an inventory system tracking which pieces have already been cut?
-   How does the crane factor into loading vs. the forklift?
-   What is the actual utilization rate of the cutting machines (uptime vs. idle vs. running)?

### Logistics and Next Steps

-   Leave by 3:15, cars by 3:20 to beat shift-change traffic at 3:00 and 3:30
    -   Alternate exit: cross to next building, go around back, exit at red light
-   Is/Is Not table not finished today; to be completed next session
-   Team coming in early tomorrow to continue
-   Consolidate all answers from Caleb/Olivia into one organized sheet before next session

### Next Steps

-   **Complete the Is/Is Not table for method root cause**
    
    Not finished today; needs to address organizational flow of materials from OP7 to OP18.
    
-   **Ask Caleb: is OP18 waiting on parts to be cut or searching for already-cut parts?**
    
    This determines whether the organization bottleneck is as significant as the cutting bottleneck.
    
-   **Ask Caleb: how far in advance does production control send cut instructions?**
    
    Needed to quantify how much uptime is wasted cutting out-of-sequence parts.
    
-   **Consolidate all Caleb/Olivia answers into one organized sheet**
    
    Answers have been given in bits and pieces; needs to be written up before next session.
    
-   **Draft containment plan with short and long-term solutions per bottleneck**
    
    Framework is in place; needs to be written up formally for the presentation.

## Full transcript

_Speaker labels are automatic (AssemblyAI). Wording is verbatim machine transcription and may contain recognition errors._

**Speaker A:** You can get any kind of.

**Speaker B:** Any kind of food.

**Speaker C:** All right. It's containment plan time.

**Speaker D:** We need to finish the finding the problem. What it is and what is not. What is the thing that you mentioned to wanting us to do. I'm going to say this.

**Speaker E:** Can we do the presentation while we do this? Because the presentation is going to be laid out on the 80s

**Speaker A:** when you

**Speaker C:** finish talking this out. And then we can stick in the present place. Yeah, unless you want us pull up as a picture. I think it started.

**Speaker F:** I can do that if you'd like me to.

**Speaker B:** I mean, if you aren't a volunteer.

**Speaker G:** You're at the computer.

**Speaker C:** Land in the chair.

**Speaker F:** Land in the chair.

**Speaker D:** There's two chairs.

**Speaker G:** So I downloaded the template, put you

**Speaker C:** in the dark there.

**Speaker D:** I hate making presentations, but if you

**Speaker G:** want to make it over here,

**Speaker H:** I

**Speaker B:** have no one for that.

**Speaker A:** So they can see it reports and

**Speaker B:** I just remember you made a presentation at Packard. It was just so good.

**Speaker F:** Thanks.

**Speaker B:** It was really good.

**Speaker G:** And then those are just kind of

**Speaker D:** like examples of different. Awesome. Thank you so much. I don't remember what it's called. He wants us to have X amount of hairs. I don't remember, but he mentioned that yesterday.

**Speaker B:** For the what?

**Speaker D:** Yeah, what it is and what it's not.

**Speaker B:** What is and what's what not the problem.

**Speaker C:** Their first bone is like. Not that I don't know what the. I was doing over here.

**Speaker D:** We used to.

**Speaker A:** Hang on, let me see that one.

**Speaker D:** And you narrow it down to make it easier for people to understand.

**Speaker C:** Like this is big boy and this is.

**Speaker A:** Oh, yeah. Well, that's what they're. That's what they're presenting. Not necessarily what they're working with. That's what they're sharing with the crowd.

**Speaker B:** Because they probably elaborated on that. And I think the creating the fencebone and doing the wise is more to help us understand it, to present it in a way that is more digestible. You know, that's a lot of big words around.

**Speaker C:** Yeah.

**Speaker D:** Good job.

**Speaker F:** Big word.

**Speaker B:** I'm glad we got that reference.

**Speaker D:** Well, we need to do that.

**Speaker G:** Pick the hi proprietary and then in external. Sorry. Thank you.

**Speaker F:** Oh, my goodness. Wait, this is my brother's grade.

**Speaker E:** Where.

**Speaker C:** Where was the.

**Speaker D:** Oh, wait, this is your brother's group. Is the exam presentation.

**Speaker F:** No, this isn't my brother's group, but Hayden and.

**Speaker D:** Oh, your brother's here.

**Speaker C:** Where's. Where's the. You just wrote on what? Did you take that?

**Speaker F:** Oh, I did, yeah. Do we need to do this?

**Speaker B:** That's. That's a leader D what? The who, what, where, why, when, how much. That's a leader.

**Speaker D:** D no, that falls into the problem description.

**Speaker B:** What?

**Speaker D:** What it is and what it's not. Are you lying?

**Speaker C:** No. So hold on.

**Speaker A:** Do we need the.

**Speaker C:** Whoa. Okay, we need to make this what, presentation worthy?

**Speaker F:** Not right now.

**Speaker C:** Yeah, why right now?

**Speaker D:** Not right now. We can pull them off.

**Speaker C:** I'm just trying to like. Like we're all working on the same thing. Like we can all like. Like you three can work on something and then we can work on.

**Speaker F:** I've just never been the type of

**Speaker A:** person to do it like that.

**Speaker F:** And that's why my group last semester finished five minutes before we proceed.

**Speaker A:** Exactly.

**Speaker F:** But we did.

**Speaker E:** Good.

**Speaker B:** What are the things you want to divvy up to divide and conquer?

**Speaker G:** No.

**Speaker B:** Well, just entertain the idea of our team leader, by the way.

**Speaker D:** What do you want?

**Speaker A:** Yeah, poll rank.

**Speaker D:** Mr. SMB President. What are you the President of CMA Student Mountain Board. And that's why we're going to do the best.

**Speaker C:** I don't know about that. So the example presentation that he emailed out is kind of the structure that Eddie's looking for. And so it's kind of. Not that we need a mole or stuff exactly to that, but it's a good. I can't find it now that I'm looking for it. I found it. We don't have WI fi, do you? Or is that secured?

**Speaker G:** We have it, but I can't share it.

**Speaker F:** Yeah, sorry, there's Visitor.

**Speaker D:** Visitor? What popped up?

**Speaker G:** Sorry I asked last year.

**Speaker D:** Oh, visitor net. You might be able to. Oh no. Oh, you need a hotspot.

**Speaker C:** No, I've got one. It's what I'm currently using.

**Speaker D:** Don't you have a fancy hot spot? Is not a hotel.

**Speaker C:** That's just not travel router.

**Speaker B:** That's not.

**Speaker C:** It's not hotspot.

**Speaker A:** Oh, you want. Is he one of the Starlink?

**Speaker C:** No, I want a Starlink. It's just too expensive.

**Speaker A:** So you got a Tesla, but you don't have Starlink?

**Speaker C:** Supposedly they have Starlink built in. I just haven't turned it on yet. Supposedly.

**Speaker G:** I hope. I don't know, like cybertack or anything. Well, I hope not. I don't know. Since I've been here I haven't heard of anything.

**Speaker D:** Anything what any other countries try to.

**Speaker G:** We're very, very secure. I was gonna say like even we. Like one time I got locked out of my own computer and I didn't get in for four hours. They wouldn't let me in the computer like Anytime I tried to type my password, it would just say, like, it does not exist. It wouldn't give me the option to put anything in with those little uni keys. It just like, wouldn't recognize that it even existed. And I kept calling it and they were like, oh, we're gonna send somebody to come help you.

**Speaker D:** We'll call you back.

**Speaker G:** All these things.

**Speaker D:** I was like.

**Speaker G:** Kept getting the run around. I was like, we are so st.

**Speaker D:** We can't even let our own employees

**Speaker G:** into their own computers. It's crazy.

**Speaker A:** Welcome to which is good.

**Speaker D:** I mean, I appreciate it.

**Speaker G:** We're very secure, you know, security gate and everything. We have seen this and that least

**Speaker A:** secure U.S. defense contractor. I need.

**Speaker F:** I should have remembered his name.

**Speaker G:** I wrote it down.

**Speaker D:** It's in one of my notebooks.

**Speaker B:** I wrote it down.

**Speaker G:** So if I read the cold him

**Speaker B:** back, I thought

**Speaker G:** he finally helped me.

**Speaker D:** I was like,

**Speaker B:** If we want, we can come back and elaborate later.

**Speaker G:** Yeah, I think we can add on to it.

**Speaker F:** But that's the basis

**Speaker B:** for now.

**Speaker D:** It's just a solution.

**Speaker G:** They like, kind of gave them a.

**Speaker B:** So we need to do.

**Speaker C:** Yeah, we have our root calls. No, we don't. We're trying to find the root cause. We find the root calls from the fishbone diagram that we made.

**Speaker F:** Yeah.

**Speaker H:** The root cause.

**Speaker F:** We have to find the most significant branch.

**Speaker C:** Yes. And then go from there.

**Speaker H:** IPhone.

**Speaker F:** Which that whole fishbone did. We base it off of the problem statement already given to us.

**Speaker C:** Correct.

**Speaker F:** We did.

**Speaker C:** We did.

**Speaker A:** Okay.

**Speaker C:** Because we could have done the Fishman diagram without a problem.

**Speaker F:** You're correct.

**Speaker C:** Which was the OP7. Can't support OP18.

**Speaker H:** Correct.

**Speaker A:** How are we doing compared to the other group?

**Speaker B:** I think we're done with the fishbone.

**Speaker H:** Okay.

**Speaker A:** It doesn't need to clean it up.

**Speaker C:** It doesn't look good.

**Speaker B:** Simultaneously did that with the fishbone and kind of went down from it.

**Speaker C:** We need to ride it out separately.

**Speaker B:** But it doesn't look pretty.

**Speaker H:** Yeah, I've got some more of these, but.

**Speaker C:** Okay.

**Speaker H:** They're not in my briefcase. I'll have them tomorrow.

**Speaker E:** Okay.

**Speaker F:** Yeah.

**Speaker H:** Clean it up.

**Speaker D:** We just kind of brain dumped on there and kept asking questions until we

**Speaker F:** got far enough down.

**Speaker D:** We're like, I don't think we can go any further.

**Speaker C:** Okay.

**Speaker B:** Do you do your five whys for each of the categories of the food fishbone diagram or just your root cause?

**Speaker H:** No, just circle two or three. Are there major that look like these are the most significant. And that's the one.

**Speaker B:** That's right. And then that's also the ones we do. The is and is not questions for.

**Speaker H:** Yeah, I mean, the is and is not really. It's not really about your fishbone or five.

**Speaker A:** Why?

**Speaker H:** It's just really what's happening that we seen.

**Speaker A:** Okay.

**Speaker H:** What's really in play and what's not in play in this. Right. Got a containment statement?

**Speaker C:** No, that's our next. Working on course of action.

**Speaker A:** Okay.

**Speaker C:** All right, man.

**Speaker B:** I like your slide so far, though, man.

**Speaker F:** Isn't that nice?

**Speaker H:** Most artistic.

**Speaker C:** Yeah.

**Speaker B:** I think Olivia gets most.

**Speaker D:** We asked for the temp if there was a template.

**Speaker A:** Yeah.

**Speaker H:** Okay. So now are you working on your machines? These are not English machines. Right.

**Speaker D:** We're pulling up your presentation.

**Speaker H:** Okay.

**Speaker B:** I don't think we're writing anything down on our.

**Speaker H:** So did you. When you say my presentation. The one from yesterday. So I sent you another one from the desk. You got it. That's just kind of an example. Really good.

**Speaker D:** Yeah, we were looking at that.

**Speaker H:** Yeah. You know.

**Speaker B:** Yeah, that's very helpful.

**Speaker H:** Yeah. Most of the time it does help you kind of, you know, think about. Okay, here's what all we need to do. And here's one we forgot. Really? Yeah. Yeah. That was a good group, too. Were you able to watch the video that's in that presentation?

**Speaker F:** No, it just was black on.

**Speaker H:** Yeah, you probably will when you get on your laptop. So it's pretty cool. They nailed that one. That would be good. That was one. That was one that Toyota had not been able to figure out, too.

**Speaker C:** Okay.

**Speaker D:** Yeah.

**Speaker H:** Everybody remember Ellen Mattering?

**Speaker C:** Yes.

**Speaker H:** Yeah. She was on that team and she had interned there.

**Speaker B:** Okay, so.

**Speaker H:** And who else was.

**Speaker C:** Was there a Driesel? Is there a weasel kid? I don't know. I'll think of it a minute.

**Speaker F:** So now do we need to bring, like, all of us could collectively brainstorm on that bushboard and pick at least two that we think are the strongest calls.

**Speaker E:** Yeah, I think that would be pretty obvious.

**Speaker D:** I think we should just, like, talk

**Speaker F:** through all of them.

**Speaker C:** Let's talk through all of them.

**Speaker B:** All right, let's hear it.

**Speaker F:** But teamly, do you agree with this?

**Speaker C:** Yeah, I mean, I'm not like, the end all be all here. Like, I am very much not. It actually drives me. Yeah, he's not.

**Speaker D:** So we're gonna make you do all the work.

**Speaker C:** Okay.

**Speaker A:** No.

**Speaker D:** The major pulse. So if anything goes wrong, you can take the blame.

**Speaker C:** That's why I get the higher salary. Right. All right. OP7 can't support off 18 material demand. We're just going to keep drilling that in. That's Our problem we'll try to figure

**Speaker B:** out later down the line.

**Speaker F:** Yeah, I think I just sent you

**Speaker D:** a picture for what we need to work through

**Speaker C:** back. Yum. I feel like tow mater every time I say that, you know. Okay. Waiting on for the forklift to move the parts to the cutting machines. Forklift, the forklift service, the sheet metal shop. So only op 7, 18, 22 and there's two shared between everything that they need for the capacity there. We've talked about adding more forklifts. They have cost constraints and they can't justify capital expenditure for doing that.

**Speaker D:** Wait, where are we? Are we probably solving right now or

**Speaker B:** what are we doing? We're picking the two or three most relevant causes.

**Speaker A:** Okay.

**Speaker D:** I feel like we can move this into method, like as a byline and a method tree, as in ask for the forklift at the right time or earlier so you can do other tasks

**Speaker A:** when you're waiting for the forklift.

**Speaker B:** What category?

**Speaker F:** And my whole thing is OP18 doesn't

**Speaker D:** even need the forklift, do they?

**Speaker B:** Maybe if you're large pieces, they're large parts.

**Speaker D:** Because the. The pallets of all the pieces, the forklift could comes and fix them up

**Speaker A:** and then move them to the next shelf.

**Speaker B:** They showed us. What category is it under?

**Speaker C:** Right now

**Speaker E:** it's under machine for OP18. Where do they work on the pieces

**Speaker A:** that they need the fork to do?

**Speaker F:** I think all of them can fall into each gap. Like machine can be method, but it's

**Speaker C:** also, I mean like we're caught up in the weeds there on what the actual thing is, because.

**Speaker B:** Yeah, I think so.

**Speaker H:** Yeah.

**Speaker B:** But either way, I don't think that's the biggest. Correct.

**Speaker F:** I think it's one. I think it's like number three. Because I mean that's the main time

**Speaker D:** style that we have.

**Speaker F:** The fact that it takes 30 minutes

**Speaker B:** for the forklift to move it.

**Speaker A:** Yeah.

**Speaker B:** Well, what's next?

**Speaker C:** That's just the only time one operator has only been trained on one machine. They have three operators for the four machines.

**Speaker F:** Yeah, but I feel like that one's not as important because space attacks only have three people down there.

**Speaker A:** The other thing too is that they don't have to have someone on that machine the entire time.

**Speaker E:** Correct.

**Speaker A:** So I don't think. I think three people is fine. Yeah.

**Speaker B:** I just think it's more an issue that they're not cross trained.

**Speaker A:** They're not cross trained. And then we'll probably get into it later. Machines aren't just running enough.

**Speaker F:** Yeah, but do we think that's one of our main issues.

**Speaker C:** Did we ask. I personally think no about utilization on cutting machines.

**Speaker A:** What do you mean?

**Speaker C:** Olivia, can you ask Caleb what the utilization is on those cutting machines in OP7? Like uptime, like.

**Speaker H:** I'm sorry.

**Speaker C:** No, no, no.

**Speaker A:** We're talking to Olivia.

**Speaker G:** Sorry.

**Speaker C:** Does that make sense?

**Speaker G:** Well, I didn't hear the last part.

**Speaker C:** What up time?

**Speaker D:** Like how, how much are the machines up and running?

**Speaker B:** Yeah, he said running 60% of the time.

**Speaker C:** So he did tell us that.

**Speaker F:** That's how much they're, how often they are running.

**Speaker A:** How much time are they running every day?

**Speaker D:** Let me go.

**Speaker C:** I think that somebody said 60.

**Speaker B:** I asked Caleb when we were walking through and I asked him how rough, percentage wise, how often are these machines able to run? Not how often are they running, how often are they in a condition to be able to run? And he said the oldest ones, which are the worst, were around 60% of the time were in condition. I think there's a different question we want to be asked.

**Speaker A:** How often are those machines running cut and cutting?

**Speaker F:** Or we could like ask how long does it take to cut one piece? If the forklift comes, moves that one piece, how long is that?

**Speaker B:** Well, I think. But we're wondering how much they wait off or not.

**Speaker A:** Yeah.

**Speaker B:** Correct.

**Speaker A:** Yes.

**Speaker G:** Are you asking like how often work down.

**Speaker A:** No, so, so in my mind there's the time that they're not working, the time that they're in working conditions but not running, and then the time that they're running. How much time are they running? Does that make. Yeah, is that kind of.

**Speaker C:** Because if they're.

**Speaker A:** Yes, that's perfect.

**Speaker C:** If they're in working condition, okay, that's fine. If they're in working condition and not running, they're either loading a program in, which is fine. Like technically that's non value added. But they have to do that still.

**Speaker B:** Yeah.

**Speaker C:** Or they're waiting on a forklift to bring the material to them.

**Speaker B:** I, I think the issue of the non value added time, which ones are a problem? Or waiting on the full lift or waiting on the home. Other than that, it's kind of like if you're gonna have that prepping a program. But I, I think that would be a more medium level priority than up top.

**Speaker C:** We have cutting out of order because they're trying to maximize material usage and OP18 drawings are too complicated.

**Speaker A:** That's it. What's that different 18 problem, which is I guess out of the scope of what we're trying to do, what the problem is. I don't think it's out of the scope of the project. But it's out of the scope of what our main problem.

**Speaker E:** Correct.

**Speaker B:** Well, I think we all agree that at least one of the top priorities is the fact that the machines are not often able to run because they're down.

**Speaker C:** Yeah.

**Speaker F:** Yeah. I would say the machines is good.

**Speaker B:** I think we don't even need to read through it to find that extra.

**Speaker A:** Yeah.

**Speaker B:** So now we just need to say is there one or two more that we think are worth deli diving in?

**Speaker F:** I think the method, I really do think.

**Speaker B:** Oh, like cutting things way too early. Yeah, I agree too, actually.

**Speaker A:** Yeah.

**Speaker B:** What does everyone else think?

**Speaker D:** I don't think it's. I think cutting it way too early, but I also think part of the reason is might be how they're organizing the price when they're cut to room so that they're not divvied out into the sub things. Because like if you haven't weren't cutting things early, then setting the ones that you're running really, really early aside and focusing on organizing the ones that you need more.

**Speaker B:** I think it's kind of.

**Speaker D:** But we don't know the answer of how they organize those things.

**Speaker B:** Yeah, I feel like.

**Speaker F:** But I don't think that's our problem. Our problem is the fact that the material from OP7 isn't getting to OP18 fast enough.

**Speaker D:** Yeah. But part of that is just because they can't find the pieces that they needed.

**Speaker F:** Is it.

**Speaker D:** That's one of the things that was sad.

**Speaker G:** Okay.

**Speaker F:** I wasn't sure if it was because those. Those pieces hadn't been cut yet or if it was because we. They just couldn't find them.

**Speaker A:** It's probably both is my thought process.

**Speaker F:** But I think that's definitely one of the top things that we need to think about.

**Speaker G:** Right?

**Speaker C:** Yeah.

**Speaker A:** Yeah.

**Speaker F:** I think it's the.

**Speaker D:** The two sides of that is.

**Speaker A:** Yeah.

**Speaker B:** Like I think an organizational system of things that are already being cut, plus maybe a good way of storing and keeping partially cut and still usable metal. That's. I feel like it's kind of two sides of the same coin.

**Speaker D:** One thing that I'm not sure of is because I don't have too much experience cutting metal or anything is if you don't like cut all of it in one go. If. When you try to put it on again, if that somehow changes the usability of the metal. Because I'm just thinking about like when I use this is concern, but when I use my cricut to cut on a piece of paper, if I like cut out part of a piece of paper and then don't end up using

**Speaker G:** the other half and I try to

**Speaker D:** put it back on sometimes it doesn't always work the same way as if I just cut everything out in the first paper.

**Speaker F:** I mean think about it.

**Speaker C:** Yeah.

**Speaker F:** That probably would be an issue because then you're trying to work around all these scraps later.

**Speaker D:** Yeah. You have to line it up like exactly the same way.

**Speaker B:** It seems you're going to run through the same program. If you rewrite a different program you just have to set the origin point which they're doing anyway. So it really shouldn't affect it too much to use a partially cut piece as long as you know what you're cutting is going to fit within that.

**Speaker D:** Are we sure about that?

**Speaker A:** Yeah, well I mean that's. I've done similar things. Yeah.

**Speaker B:** That was on the watercolor so. But it was she

**Speaker A:** sweet.

**Speaker C:** They're going to try to cut the whole sheet as best they can because then they'll have to load and unload.

**Speaker D:** Do that. Yeah.

**Speaker B:** That's the only thing I try to be in my head is like that

**Speaker C:** if you were doing that you would need more forklift usage which is the problem. The forklift being waited on to put parts onto.

**Speaker D:** We do got to try to just back some.

**Speaker A:** Has it in one go. Yes.

**Speaker G:** Earlier about like how much has to get scrapped because.

**Speaker D:** Oh yes. We asked about the deficiencies.

**Speaker G:** Okay.

**Speaker D:** I was like I can't remember.

**Speaker B:** We did be better. It's just.

**Speaker A:** What was the question?

**Speaker C:** The deficiencies.

**Speaker D:** I think.

**Speaker B:** I think they should. How far ahead they can pull a piece from.

**Speaker D:** We can ask that question cuz that's

**Speaker B:** just what I mean. Did we ever.

**Speaker A:** What do you mean?

**Speaker B:** Like say, you know, you're working on part ON Sub Assembly 100 and you're fitting it on. It's like oh, I can't fit anything more from this. I'm gonna go down and see if I can find something else from a different subassembly that's smaller than I can.

**Speaker C:** Yeah.

**Speaker B:** Let's say they make 60 a day. I think it'd be good if you limit your search to those 60 of that day versus getting you know, from 0 to 60 instead going down to 200.

**Speaker A:** I just thought about this.

**Speaker D:** Here's another thing to ask like how far ahead they go apart from when. From when op 18.

**Speaker A:** Here's another thing I'm wondering if they don't track, if they're not keeping track of what they cut out is it possible that if they go let's say 200 sub assemblies down the line and cut something out from that's 200th sub assembly and they forget about that and then they come back, they look back through there, they cut that part out again. Is it possible that in looking ahead so much they cut out multiple parts, identical parts?

**Speaker B:** I think it's definitely possible.

**Speaker A:** I think that's if they're looking so far ahead and they're not really tracking what they're cutting out and then they

**Speaker F:** need to have a more organized system.

**Speaker B:** We also just don't know what if they have.

**Speaker C:** Yeah, we don't know enough about how

**Speaker B:** they do that there. PC's outside of what we're doing. Correct. And that's who would have that system. Cuz they're deciding how things become right. So we don't really know. I feel like we. It's outside of what we can deal with. We have to assume that they do. Or can we ask.

**Speaker C:** I don't have to ask questions about PC.

**Speaker B:** Do they have a system of knowing which pieces they've cut?

**Speaker D:** If they have a checklist if they're

**Speaker B:** pulling early pieces, pull pieces down.

**Speaker C:** I don't know.

**Speaker F:** Do they have like an inventory list of everything that they have cover?

**Speaker A:** Because if they.

**Speaker F:** I feel like they don't and I feel. Because think about it.

**Speaker A:** I have a feeling if those parts. If they're cutting out repeat parts they're just sitting there for forever and it's just adding to the time that people have to spend looking for it. Yeah, that could be us. That half those parts in that pile are never going to get used. No, it's possible or not. I do not.

**Speaker B:** So machines being down and the other one is the method is what we're

**Speaker F:** trying to Method method like slash organization.

**Speaker D:** Yeah, I think it's method of machine.

**Speaker B:** Method of machine. I agree.

**Speaker F:** Should we go through the other ones? Have we even gone.

**Speaker B:** Have the gone through all the other ones?

**Speaker C:** Yeah, pretty much. We don't do environment or measuring so. And then we had manpower.

**Speaker B:** I think those ones are pretty.

**Speaker C:** I don't think man power is the issue.

**Speaker A:** I think it is. I think it's something definitely. It's not a main problem. Okay.

**Speaker B:** Do we do the is and is not?

**Speaker A:** Yeah.

**Speaker B:** So that's just the whole thing. That's not specific.

**Speaker F:** I think is and is not for both machine and what is this for?

**Speaker D:** That is the is and it's not. So one of the categories is.

**Speaker F:** So who is the first one

**Speaker A:** is

**Speaker B:** effective and this is from.

**Speaker F:** Let's do this for.

**Speaker B:** Yeah, we're doing it for. For the method branch.

**Speaker D:** Yeah.

**Speaker F:** So like we'll do an is and is not for method and then is

**Speaker C:** and is not for and then this material.

**Speaker B:** So who. Who's affected by the machine problem? Or is it just who is affected by the problem of 18 not getting the necessary materials from OP7?

**Speaker F:** Who is affected? Okay, so are we doing machines first?

**Speaker C:** Yes.

**Speaker F:** Okay, so who is affected by the machines not getting down on 18? Pretty much everyone that's also OP7.

**Speaker B:** That's why I feel like overall who is affected by the problem not the root causes. Because we're still trying to find causes in the. I opened the left question yesterday testing possible causing using is and is not table. If possible cause is cause of the problem statement that every is. Oh, it is my bad to both questions.

**Speaker G:** The first about the waiting for utilization. He said if you're on average, if you're losing about an hour today like waiting on the material and everything, then you could probably lose up to an hour of utilization and maybe an extra

**Speaker D:** 30 minutes on programming machines.

**Speaker A:** See.

**Speaker F:** Okay, but I'm trying to think of problem statement.

**Speaker G:** And then about the deficiencies in the machine he said it's not very common but it could happen on the Widomatics and then sometimes in their nest program it may have issues with overlapping.

**Speaker F:** They're not fully doing this but he said something about doing it for each one which just might help us like doing it individually like really fast just for machines and methods might help us like fully more comprehend and be able to make a condensed one of like our actual problem. Or is that a wasteful stuff?

**Speaker C:** I was halfway through that

**Speaker D:** in that

**Speaker B:** man in the Toyota example they do the is or is not for their problem statement

**Speaker C:** who is affected by OP7 not getting to OP18.

**Speaker F:** But it sounded like Eddie was saying that. Let me go look through the lecture slides to see.

**Speaker G:** They have to. They have organized their own material.

**Speaker B:** I just have no idea what a container, an interim container would be. It's like if the root causes machine

**Speaker C:** the bigger than I thought it was going to be.

**Speaker B:** I think we all just think,

**Speaker C:** yeah, the best part is l knows the answer to this problem.

**Speaker B:** They actually have new machines on order. I don't think that's the answer though. I mean the problem is the forklift.

**Speaker C:** The method of the materials getting to the cutters. The colors themselves

**Speaker A:** are not the problem. Well, we don't, we don't know. We don't have enough information to know that.

**Speaker C:** Biggest problem. Is the force getting material to the cutters. That's what I think.

**Speaker A:** But if.

**Speaker C:** Well, if I could be wrong.

**Speaker A:** Well, here's kind of my thought process that we know how much time they're spending waiting every day with pork was. It's that 30 minutes a day.

**Speaker C:** Yes.

**Speaker A:** We don't know how much time is being wasted with the cutters just sitting idle waiting to be used.

**Speaker E:** Do you have that fish dagger?

**Speaker A:** Which is what we're trying to figure out. I think we're waiting on an answer.

**Speaker E:** Well, the only thing about. Okay, so we have. I think our biggest problems are, I mean, the forklifts not supplying the machines well enough. Right. But the machines are also down half the time.

**Speaker C:** The machines are always.

**Speaker B:** Are always down.

**Speaker E:** And there's not enough. There's not enough demand for them to supply 18. But they're also not able to supply 18 enough either.

**Speaker C:** See, that's what's confusing me though.

**Speaker G:** Yeah.

**Speaker C:** Because we just had.

**Speaker E:** Basically, we have two problems here. The supply and then the actual utilization.

**Speaker C:** Wait, what's the question for utilization is.

**Speaker A:** What's. What we're asking? Only the.

**Speaker C:** That's what Caleb just said was the utilization was they're running unless they're waiting for a forklift or.

**Speaker A:** Or an operator to set.

**Speaker B:** Or they're waiting because they are not

**Speaker A:** in a living room.

**Speaker D:** Yeah.

**Speaker C:** Yeah.

**Speaker D:** Okay. Where in the process are we? I just got answers from Olivia

**Speaker B:** about what we've.

**Speaker C:** So we've narrowed it down to. Would you say, Jack, the.

**Speaker E:** That. Well, okay. There's two main problems. Right. I mean, it's the supply and then the utilization.

**Speaker D:** Yes.

**Speaker E:** So I mean, the machines aren't getting supply. The machines also aren't utilizing what they

**Speaker B:** should be,

**Speaker E:** which actually would just cancel out, but somehow it just doesn't.

**Speaker C:** It's never that simple.

**Speaker E:** Theoretically, though, just cancel out and it would mean that it's operating fine.

**Speaker D:** I was just talking with her about the two answers she gave. One of them was about the deficiencies. The deficiencies, that's not an issue.

**Speaker B:** The deficiencies of the machines not working.

**Speaker D:** No, of the parts.

**Speaker B:** The individual parts.

**Speaker D:** So the parts that they print and can't actually use. That is basically insignificant to our discussion.

**Speaker A:** Correct.

**Speaker D:** And that you get the same. Some other information about like the utilization of the machine and how often it's used. I don't remember the exact numbers, but when I was talking with her, I was asking about. She mentioned something about overcharging. So basically each work order that they put in has. Has like the time attached to it to produce the parts. And sometimes when they Go to organize parts, that counts towards it or when they go to organize parts it counts towards charging on the work order and artificially collated. So they tend to not spend as much time necessarily organizing it. And then they also have like obviously loose time to wait for the forklift. So that makes me think that that's more of a procedural issue. And the way that you're doing the things, it's like if you're waiting to finish each task and then moving on to the next one and then you have to do additional waiting for like the forklift, there's ways to change that. So you like call the forklift, go organize parts and that way you're not overcharging for that and then move on

**Speaker C:** to the next part.

**Speaker D:** Does that make sense?

**Speaker C:** Did we answer? How does the forklift driver know when to load the table?

**Speaker D:** So they operated calls. So if the operator calls okay. And then goes to organize the parts that they cut, that's not like you're not losing the time in the same way you currently are because I. It's. That makes sense.

**Speaker A:** So you're saying the operators are calling the forklift operators and they're just waiting around when they should be calling the operator, going and sorting stuff from previous cuts to not waste time.

**Speaker D:** Yeah, just having a more organized system of how things are laid out.

**Speaker A:** I get what you're saying.

**Speaker C:** Yeah.

**Speaker A:** But I'm not sure the sweating itself

**Speaker C:** is still non value added though. Even though it would.

**Speaker A:** Well, I'm just not sure what to

**Speaker B:** do with that information I guess.

**Speaker E:** Wouldn't that kind of eliminate our problem of the supply then?

**Speaker D:** Yeah, cuz they can't find the parts. If you organize them, spend more time organizing them, then you're able to move the system faster. And that's within the east traits of having limited forklift use, but.

**Speaker C:** Right.

**Speaker D:** I'm not sure if that gets down.

**Speaker A:** Well, I'm trying to think of like what do you like?

**Speaker C:** How would you actually organize that?

**Speaker A:** I mean what you. All you could do really is just tell your operators to stop standing around waiting for the forklift operator to go to something else. That's not really.

**Speaker F:** Unless we just. Unless we figure out a good way to organize those pieces.

**Speaker E:** Only thing about that is, is that like from the time that it takes the FORT lift just to get supplies over there, are they now stuck doing another task when they could now be operating on the machine again?

**Speaker A:** Well, I mean the fork grip for the operator could probably load it. All they would have to do is once that person came back, set up whatever they need to on machinery.

**Speaker B:** Right. I'm just trying to.

**Speaker E:** Oh, I see. I see what you're saying.

**Speaker A:** But it, but it comes down to like, I just don't know. There's no really way to create a system to kind of implement that other than just tell your guys to stop slacking off.

**Speaker B:** That makes sense.

**Speaker A:** Right. And that doesn't feel like a solution. That just feels like yelling at your guys.

**Speaker C:** Yeah.

**Speaker D:** I mean. Oh, that's why I'm like procedurally.

**Speaker A:** Yeah.

**Speaker D:** So you write it into the procedure of what they do, like a stand. What's a sop?

**Speaker C:** A Standard Operating Procedure.

**Speaker D:** Standard Operating Procedures.

**Speaker A:** Right.

**Speaker D:** So you have it in there. Well, also, this might be something that's already in there and I'm just not sure about. But we don't know the sop.

**Speaker F:** But I think one thing that would be better is like, as soon as it's cut, you take that piece and you go put it in its assigned section. That way you don't even have to like, are calling for another piece and then have to go dig through all this stuff. Like, it should be. As soon as it's cut, it should have a sign spot.

**Speaker A:** All right, so maybe we need like, okay, racks or back.

**Speaker C:** Back. How does material get from, like it's cut on the cutters and OP7 and put on a pallet. How does that palette get to up?

**Speaker A:** I think the pallets are just sitting there. They move the parts.

**Speaker C:** So how does the full driver know what to move?

**Speaker B:** He grabs the full sheets from the storage in M7 and loads them on.

**Speaker A:** So there's Samuel.

**Speaker B:** No, after they're cut, I think the operator just picks.

**Speaker A:** I think the operator moves the parts by hand to that staging area.

**Speaker D:** I think that's a question we should ask is how the.

**Speaker E:** Isn't it the big parts they need like. Are you saying like after they're cut and they're sitting on that pallet, how do they get to the tables at 18?

**Speaker C:** Correct.

**Speaker E:** I think the big. I think the big parts that they can't carry, I think that the forklift does those, but I think there's smaller parts that they can just go ahead and take.

**Speaker C:** Okay.

**Speaker A:** I feel like this is just throwing wildly in a different direction.

**Speaker C:** Yeah, it is.

**Speaker H:** That.

**Speaker E:** She just said that.

**Speaker C:** Elizabeth.

**Speaker E:** Oh, yeah,

**Speaker C:** There you go.

**Speaker D:** Sorry, I pulled from the list, last

**Speaker A:** one for Olivia and the last one to get his name put on the PowerPoint.

**Speaker D:** I. I swear I looked at the list. I don't think. Are you on the list on the thing?

**Speaker C:** Cuz I Was looking how far in the Excel?

**Speaker D:** I don't know if you are cuz

**Speaker A:** I thought there was a underneath there.

**Speaker E:** Whenever he did the presentation at the hotel, we only had six people in this group.

**Speaker A:** I thought well every single group is seven.

**Speaker B:** I was on there.

**Speaker E:** I don't know. I thought it only showed six whenever we did that presentation.

**Speaker C:** Six or seven

**Speaker D:** cuz none of us talking about.

**Speaker C:** It's okay. Nobody said anything of it actually. Nobody said anything.

**Speaker D:** Nobody said anything. You haven't missed anything. You're just not in there. We can add you. Sorry Luke, we just saving the best for last.

**Speaker C:** Sure.

**Speaker F:** No, I really don't think you're online

**Speaker D:** cuz I was checking to make sure I like split everyone's most names already.

**Speaker B:** So I don't know my username.

**Speaker C:** What's your password?

**Speaker B:** Is that what we've decided?

**Speaker E:** I actually don't know.

**Speaker B:** Is that what we've decided? It's the biggest issue is I feel

**Speaker C:** like that's what she trying to hear me out.

**Speaker A:** But with the information we have that's not the case. There might be more information we just don't know about.

**Speaker C:** This is me jumping to a solution before figuring out what the problem.

**Speaker A:** That's fine, let's hear it.

**Speaker C:** But you know those. You know like those lights that like tell you like what's that called? Like a. No, it's like a word for it. It's like a signal or something. Like if the operator could press a button and like red light turns on and that signals that the operator needs the foreclosure.

**Speaker A:** Well, because they had something similar. Taylor. Right.

**Speaker C:** I didn't use it, but I think they tried to.

**Speaker A:** I think they had something. No, I'm. You know that screen when you walk down on the floor, there's that big screen up top like the TV you looked up. Yeah, there's the TV with like all the numbers.

**Speaker B:** Yeah, they never used that.

**Speaker A:** They never used that.

**Speaker C:** Okay.

**Speaker A:** I remember they had that though.

**Speaker C:** It was like. It said January and it was like June when I was there.

**Speaker B:** So.

**Speaker A:** Okay, maybe they don't use it, but they really should have.

**Speaker C:** But like companies like Toyota, like bigger companies do stuff like that.

**Speaker D:** Status lights of some kind.

**Speaker A:** Yeah, yeah, I know what you're talking. I don't exactly what you're talking about.

**Speaker D:** That would just be like hey, go get a machine.

**Speaker F:** And that's not the.

**Speaker B:** It's just something I thought the whole time I was in there. I know that's not an easy thing. That's just more fun

**Speaker C:** like and on light is that what that is?

**Speaker A:** I think status light is just.

**Speaker C:** Anyway, that's me jumping to solution before the problem.

**Speaker D:** But, you know, go back to the is or is not table. Did we start one?

**Speaker B:** Yeah, I think we got one question.

**Speaker C:** Yeah, I didn't write down the answer. So we're have to go back.

**Speaker H:** All right.

**Speaker C:** Who is affected by the problem? The problem that OP7 or OP18 is not getting E parts on time from OP7.

**Speaker B:** The operators and OP eats.

**Speaker C:** Who is not affected?

**Speaker B:** The consumers, I suppose.

**Speaker A:** Well.

**Speaker B:** Well, the Navy.

**Speaker A:** The Navy get their books, I guess 22. Well, OP7, obviously, they're not affected by the problem that they're creating.

**Speaker E:** Right.

**Speaker C:** Okay.

**Speaker A:** I guess 22 would be affected downstream just because of 18 not being able to get what they need.

**Speaker D:** Also, any parts that are the strict parts that 18 makes by itself.

**Speaker C:** Yes.

**Speaker A:** Okay, so 18 is and is not effective.

**Speaker G:** Correct.

**Speaker C:** Okay, so what

**Speaker D:** is effective?

**Speaker A:** Well, because they've got the parts that they need to get from seven, but they make their own parts the other. Oh, it's not locked in the other operations.

**Speaker C:** Wait, what?

**Speaker A:** Nothing.

**Speaker C:** Are you talking about me?

**Speaker A:** No, about him.

**Speaker D:** The other sheet metal operations in the building. I don't know if that's the end.

**Speaker B:** What other sheet metal operations? On the other side off 22.

**Speaker D:** No, beyond that. On the stuff on the other side of the building, which is still sheet metal. Just not related to ventilation because that line we were working on was ventilation.

**Speaker B:** That sounds good.

**Speaker D:** Okay, then we can just. Yeah, I was just looking at the. Like they said, who, like, who is not affected by the problem in this space because they also, like, use the forklifts. But I. We can just ignore. Did. I'm taking. Let's move on.

**Speaker C:** Okay.

**Speaker F:** Okay, next one.

**Speaker C:** So what is affected?

**Speaker A:** What is affected?

**Speaker C:** What is affected?

**Speaker H:** The.

**Speaker D:** What type of.

**Speaker C:** The forklift drivers are. Well, no, that's the people.

**Speaker D:** What type of problem is it?

**Speaker A:** A hard one.

**Speaker D:** I feel like it's material or time delivery of materials.

**Speaker F:** I feel like when it comes down to it, it's more organizational. What's like a problem? Is it organization?

**Speaker A:** Well, I mean, does it. It doesn't have to exactly be one category, does it?

**Speaker B:** No, it can be multiple organizations.

**Speaker F:** Because we're thinking our main problem, which is the fact that OP7 can't, say, supply OP18's demands. What's. What is the big issue with that?

**Speaker E:** They're not meeting. I think it's just.

**Speaker F:** What type of problem is that?

**Speaker E:** I think it's just like there's two that I said earlier. It's just the supply and then and

**Speaker B:** machine supply and machine utilization.

**Speaker E:** I think there's only one running. Then that's a lot less. That would already be a direct cause of OP18 not being able to get their parts. And I mean, the only thing about the supply part is the fact that they just call the forklift driver to come deliver those parts.

**Speaker B:** I mean, like,

**Speaker E:** does that eliminate that as a problem or does that just create a bigger problem.

**Speaker D:** For Yalls? Reference. I just sent the is and is

**Speaker A:** not chart that was on his slide

**Speaker D:** to our group chat.

**Speaker C:** Is that the same one I'm looking at?

**Speaker D:** So you can see the question.

**Speaker F:** I don't even know if this is. If the is and is not is what we should be focusing on because it kind of sounds like our big issue is that we're not exactly sure

**Speaker A:** what our root problem is.

**Speaker C:** Correct.

**Speaker A:** Well, I think it's two.

**Speaker D:** I think it's separate. It's more so focused on developing, like the constraints of what is and what's not. And in order to determine if our root causes, like actually it has all of these have to be true. I think that's what he said yesterday.

**Speaker A:** I'm not entirely sure though.

**Speaker F:** Yeah, but what is our singular root cause?

**Speaker C:** I think it's.

**Speaker A:** You were. We were talking about that. It's because there's time where the machines are being used. They're being. They're wasting time making parts that don't need to be made. And there's time where the machines are available to use where they're not being used.

**Speaker E:** There's also. I mean, like, I think that's our root problem. And then whenever the machines are down. I meant that.

**Speaker A:** That's what I. Based on what we talked about. Yeah.

**Speaker E:** When the machines are down, I bet that automatically goes from a lot to zero.

**Speaker A:** Yeah, but I mean.

**Speaker E:** I mean, like. I mean, she went in there the other day and not a single one was being used. Not a single one was available. Was even available.

**Speaker A:** Right. But if then. So you're saying the problem is that they're broken. They can. They're not.

**Speaker B:** I think that's one of the biggest

**Speaker E:** problems here is that the machines are just always broken.

**Speaker F:** But I don't think that's a problem.

**Speaker C:** How many machines were broken this morning?

**Speaker E:** There is one running.

**Speaker C:** There was one running. But how many were.

**Speaker D:** How many were down because of maintenance issues versus Right.

**Speaker E:** I guess I just assumed that the others were broken because the new one was being used.

**Speaker C:** Like if maintenance issues are the only problem here.

**Speaker D:** Also I asked about the work list

**Speaker G:** because I said, how do they contact them? And I said, usually just drive by

**Speaker D:** and, like, ask for them to. So they're not necessarily always calling to come.

**Speaker G:** They just happen to be there.

**Speaker D:** Okay. Okay.

**Speaker C:** So they have to FL. They flag them down. Basically.

**Speaker D:** That's what I said.

**Speaker F:** So y' all just flagging them down? He said, pretty much. You said w. Fishing. Okay.

**Speaker D:** I. I feel like. I'm sorry.

**Speaker G:** Sorry.

**Speaker D:** I'm not supposed to help.

**Speaker E:** Oh, good.

**Speaker G:** But, you know, that's also an issue.

**Speaker F:** Maybe there could be.

**Speaker D:** Yeah, maybe that wouldn't take as long.

**Speaker C:** Yeah.

**Speaker G:** I don't know. That's an it. Sorry.

**Speaker C:** That's. That's kind of where we were getting to, though.

**Speaker A:** Yeah. We were kind of winding up for that.

**Speaker E:** Sounds like the fact that they weren't all broken and only one was being used.

**Speaker A:** Elegant tone.

**Speaker F:** Yeah.

**Speaker C:** Because why. If they're not broken, why they're not being used?

**Speaker D:** Communicating for Cliff.

**Speaker H:** Me.

**Speaker E:** I feel like that would just be said that, like, we would have damage.

**Speaker F:** That could also be. Back to the four.

**Speaker B:** They would.

**Speaker C:** On the floor quickly.

**Speaker B:** That's.

**Speaker C:** Sorry, but there's words.

**Speaker A:** Did they do a time study on how often the machines were working or running?

**Speaker F:** Harp on the machines themselves. Because that's not something that we as students can fix.

**Speaker C:** Bring Chloe back.

**Speaker F:** We can't just say, hey, go.

**Speaker A:** I was going to say we either need her back or we need her time studies. If there's any way to get those. With what. So I think we need to see the true. Just the raw numbers. I think we're guessing and we're going in circles because we don't have all the information there is.

**Speaker C:** Yeah.

**Speaker A:** If we can get the information, I think we can kind of lock in on something.

**Speaker F:** I think we need to kinda. What me and Luke were just talking about. I think we kind of need to steer clear of the problems that the machines themselves are causing, because that's something out of. We can't.

**Speaker A:** How often the machines were broken or running.

**Speaker F:** We can't tell them to go buy more machines. That's not what we do.

**Speaker C:** That's not the solution.

**Speaker B:** That's.

**Speaker F:** I know.

**Speaker D:** So I think we need to stop

**Speaker F:** harping on the machines, and we need to figure out, okay, this is the process that they have. This is the machines that we have. How do we organize it so that it runs smoother and better and faster.

**Speaker A:** Right. But I. I don't think.

**Speaker F:** Even though we can't harp on the machines and how fast they're running and

**Speaker A:** how often they run because they're not

**Speaker F:** Going to buy a new machine.

**Speaker A:** Well, I'm not saying they need to buy a machine.

**Speaker C:** The method of how material gets from the shelf to the machine, from the machine to OP18, that's our issue.

**Speaker D:** I think that's the issue.

**Speaker F:** It's the method.

**Speaker A:** Well, I think there's also part of the issue is you said all the machines are working but three of them are running. So there's one that's running or there's one that's not running but it's working. Which I think kind of plays into it.

**Speaker G:** But all are running, right?

**Speaker C:** I saw one running this morning.

**Speaker A:** Yeah. When we were down there.

**Speaker E:** But there is only one actually being used.

**Speaker G:** Maybe they're all running.

**Speaker D:** The only one being used. Maybe.

**Speaker C:** Yeah.

**Speaker F:** Most face effects, like we can't tell them. I don't think what they want us to do is like to tell them, oh, y' all need to run these machines more like.

**Speaker C:** I don't think that. Well, that's not a solution, that's a.

**Speaker F:** Yeah, we don't need to tell.

**Speaker B:** The bright side, I think what they're doing with the machines, I think we have D3 method done and I'm not saying we're done for the day, but I'm saying D3. I think we have the solution and it all comes back to get another forklift. Short term, short term, interim change. Tell me I'm wrong.

**Speaker C:** Or we can make forklift communication more effective. Utilize the current forklifts enough to where it increases capacity to where it's equivalent to getting another forklift.

**Speaker B:** I, I agree that's the long term, I think. But D3 is the interim short determinant

**Speaker A:** thing and it's where you just throw,

**Speaker D:** you throw everything at the problem.

**Speaker B:** You throw another fork.

**Speaker A:** Yes, exactly. I, I agree. I think that's actually, I think that's the short term solution.

**Speaker E:** I think. Yeah, I think either we get another, another day in forklift or we find a way to increase the usefulness.

**Speaker A:** So if we've got two forklifts operating at 50% capacity, we get a third forklift to compensate for the lack of utilization and then that long term thing increases that utilization to kind of compensate.

**Speaker B:** So we can go.

**Speaker A:** Yes.

**Speaker B:** So is there gonna be their communication

**Speaker A:** will make up for that third one long term?

**Speaker B:** Because there's not a lot of people. Well, if you get another one and just keep it in.

**Speaker E:** Yeah, I guess. So you can just get one for up seven and the one for op 18 because the other one's in op 22. Right.

**Speaker C:** Look, this is the that's the walkway space that they

**Speaker B:** have.

**Speaker C:** So here three forklifts in that cramped area.

**Speaker E:** Was the second one right now on OP22 or was it down there?

**Speaker F:** Should not be to buy another forklift. It should not be that.

**Speaker A:** I mean the whole point is not the whole point of a short term solution is to literally just throw it at. Throw stuff at the problem until we can find a long term one.

**Speaker E:** To be fair, that's not a short term solution though. If you get a forklift, it stays.

**Speaker A:** It doesn't have to be buy a forklift. It could just be pulled a forklift from somewhere else.

**Speaker E:** Specialized though. There's only certain ones that they can use. What the forklifts. I'm pretty sure that's what they said is that there's only certain forklifts that they can be used in this area. Yeah.

**Speaker C:** Because that'd be the smaller ones, I guess. Yeah. I mean they'll have like the Taylor Big Red.

**Speaker E:** There's only certain types of forklifts.

**Speaker C:** All right, we need to move away from another forklift.

**Speaker A:** Yeah.

**Speaker F:** She straight up already told us that.

**Speaker H:** She.

**Speaker F:** She told us our hint that.

**Speaker C:** I thought we were joking.

**Speaker A:** I mean it has to joke.

**Speaker B:** So are you saying this better communication is the short term fix?

**Speaker C:** No.

**Speaker A:** Then what's the short term fix?

**Speaker C:** I don't know what the short term

**Speaker G:** fix for the machines.

**Speaker A:** Think about it.

**Speaker G:** All three machines can be used right now. But since there's only three operators on day shift, only three are running. Only three machines are running.

**Speaker C:** So each operator is only assigned to one machine.

**Speaker D:** Yeah. Because you can only operate one machine at a time.

**Speaker A:** Right. Wait, so is an operator pretty much just standing there watching the machine the whole time?

**Speaker B:** But that's gonna happen.

**Speaker C:** Okay, that actually makes.

**Speaker B:** You can't change

**Speaker G:** since it's summer, they're all kind of scattered.

**Speaker C:** That makes more sense.

**Speaker H:** Yeah.

**Speaker F:** The short term answer isn't. Well, it is communication needs to get better. But we need to come up with a way.

**Speaker C:** A better way to.

**Speaker F:** A better way to actually communicate. Because even if you get a third one, the issue is that they're still having a call a forklift over to go do.

**Speaker A:** Well, I think. Well, hold on. I actually don't think having three operators before machines necessarily a bad thing.

**Speaker C:** I don't either.

**Speaker A:** Because you have one that goes down. Yes, exactly. Yes.

**Speaker D:** You always have.

**Speaker A:** Yeah.

**Speaker F:** Why are we talking about people right now? I'm confused on where this convers. I thought we were talking about the method.

**Speaker A:** Here's, here's. So here's my Thought process. So there's. The reason that they're not making enough parts is for two reasons. One, because they're waiting for whatever. For the machine to run and whatever comes out. I think there's the reason why the machines aren't working at like, their peak efficiency is because of the lack of operators and the forklifts. I think those are both things we need to at least kind of think about while we're coming up with our solution. It doesn't have to be a fourth operator as our solution, but it's something we need to do.

**Speaker G:** But I would say.

**Speaker A:** Right.

**Speaker C:** I don't think adding people is ever really solution.

**Speaker D:** I don't think adding people is a solution.

**Speaker C:** Yeah, I don't think adding foreclose is the solution.

**Speaker D:** Can we go through and do the is and is not for the method as the root cause?

**Speaker H:** Hey, folks, real quickly, a little housekeeping. You see what traffic looks like at one of the shift changes? We're doing like 70 miles an hour.

**Speaker D:** That's crazy.

**Speaker H:** So there's a shift change at 3 and there's one at 3:30. So we need to be like, moving out about 3:15 and like in your cars at 3:20.

**Speaker A:** Okay.

**Speaker H:** And we'll try to get out of here before the 3:30.

**Speaker G:** There's probably not as many people coming,

**Speaker F:** so it might be easier to get

**Speaker G:** there, but there should be a lot of traffic.

**Speaker H:** So if traffic's really, really bad, there's a way, another way to get out of here. You jump across right here, go in front of this next building, go around the back of it, and you'll come out down at that red light.

**Speaker G:** The only. The red light, it only changes at certain minutes, but it's probably safer.

**Speaker H:** I have rated it that way. Red light, like 20 minutes.

**Speaker G:** Yeah, but if it's bad.

**Speaker H:** Yeah, but it's. It's better than getting.

**Speaker G:** I would rather. Yeah, it would be safer for y'

**Speaker D:** all just to try to get to that red light.

**Speaker B:** But it's only.

**Speaker H:** If you just like, can't get out

**Speaker G:** right here, it changes to like 3:06 and then it'll change again to like 3:30 or something.

**Speaker A:** I'm hoping it three or something.

**Speaker G:** I can't remember the exact time, but it's like every so many minutes.

**Speaker A:** Long time. Long time.

**Speaker F:** Yeah.

**Speaker H:** Okay, so we'll see what it looks like.

**Speaker G:** Yeah, usually after three, like, the craft is. They. They get out around this time and the rest. My ship off at 3. What's coming right now?

**Speaker B:** The incoming.

**Speaker A:** Yeah.

**Speaker C:** So our root calls.

**Speaker G:** Sorry, my Project.

**Speaker D:** Thank you for the information.

**Speaker F:** Yeah, thank you.

**Speaker D:** You were so awesome.

**Speaker C:** Is the method of communication with forklift drivers. Yes.

**Speaker E:** Bad?

**Speaker B:** Yes.

**Speaker C:** Olivia, would you agree that the root cause of the problem is the method of communication with the forklift drivers? You can tell us.

**Speaker E:** No,

**Speaker C:** I think we don't like.

**Speaker D:** I think it's.

**Speaker E:** We don't truly grasp the communication process. Like maybe it is really easy just to like flag over someone and come

**Speaker A:** and grab it real quick.

**Speaker E:** Like I don't know how long it takes a fork float to grab something and drop it off.

**Speaker B:** The information we have is 31 minutes a day.

**Speaker D:** I don't know if I would say that that's the problem. I'm getting it more so I do like of organizing overall from once it's

**Speaker C:** organizing what the

**Speaker D:** none of them have been cut. Cuz it sounds like you have to

**Speaker A:** search for parts

**Speaker D:** quite often and they don't necessarily get laid out in a way that's easy to do from one location to the next.

**Speaker E:** Well only thing is like that was main

**Speaker B:** seven

**Speaker C:** seven is the one that

**Speaker E:** would have to organize.

**Speaker C:** That's just shifting more burden on a

**Speaker D:** lot of the problem is like not

**Speaker G:** getting the right material.

**Speaker C:** But you. You also can't tell somebody organized this like unless there's a way drawn out to do that. I guess.

**Speaker D:** Yeah. Which they have pallets out there. So maybe something we can is like the order of materials that have been cut and set them aside like a. Okay, so these.

**Speaker A:** This is the order of which we

**Speaker D:** need to have the pallets like these ones even maybe for this hour and then have those pieces.

**Speaker A:** When you were doing the tour, isn't that what they said that that's how

**Speaker B:** it was supposed to be?

**Speaker F:** I think we need to clarify truthfully what is the hold up? Are they waiting for those pieces to be cut or are they spending that time searching for those pieces that they need?

**Speaker C:** Yeah.

**Speaker F:** Because it all comes down to how they cut those materials. So I do think it is an overall method and organization problem from start to finish from calling the forklift to get there and move the sheet metal to what pieces are actually being cut to once they're cut how are they taken to the next stage and organized to those people in the next stage going looking for those pieces to use them. So I think what we need to do is come up with a way to make the whole thing flow smoother and see if there is a way that we can cut all those pieces in a better way to where they're not waiting on those pieces to be

**Speaker D:** Cut if that's what they're waiting on.

**Speaker F:** But we also don't fully know that if they're sitting there waiting for the operator to cut them, or if they're sitting there searching through all the pieces that they have.

**Speaker C:** So question for Caleb, I guess, is OP18 waiting or is OP18 searching for parts they need or waiting on them to be cut. Or both. And then we're still.

**Speaker B:** I don't know what's going on.

**Speaker A:** Yeah.

**Speaker D:** And it's just an involvement. I mean, we make a root cause problem.

**Speaker C:** Is OP18 searching for parts they need that are already cut or waiting on parts to be cut?

**Speaker F:** I don't know what else it would be. Yeah, I think that's the most valid question that we need to ask because we know that the forklift communication needs to be better because it's taking it way too long to get there and do all that. That communication is not good. And then our main problem is, is the fact that OP18 is waiting for those pieces.

**Speaker C:** Yeah.

**Speaker E:** And it takes 22 minutes a day. 22 minutes a day just to get it.

**Speaker F:** Yeah. So I'm. I'm sure it's partly because it's unorganized and they have to go look through

**Speaker A:** everything

**Speaker C:** if you're pulling an operator to organize stuff, and that takes them an hour to organize it, to save 20 minutes.

**Speaker D:** But this is what.

**Speaker F:** What I'm saying is that the whole new system needs to be. As soon as something comes off of OP7, it needs to have a designated place to go.

**Speaker C:** So I guess if you did that, you designated by where it's going on vacations, you've got the ddg, the lha, and the lpd. I guess you'd probably organize it based off of that.

**Speaker A:** Yes.

**Speaker F:** I think that each of those three needs to have their own power palettes for each of those things.

**Speaker C:** Like, you almost need color coded palettes.

**Speaker F:** Yeah.

**Speaker C:** Is that stupid?

**Speaker H:** No.

**Speaker F:** I love the color cod.

**Speaker C:** Of course you do.

**Speaker A:** Olivia.

**Speaker C:** Olivia does too.

**Speaker D:** Apparently we just don't use green.

**Speaker C:** But you like color coded stuff.

**Speaker B:** I wouldn't mind also adding shelving because then you can get more separation.

**Speaker C:** All that is. Shelby. That would. From a visual search standpoint, that'd make it harder.

**Speaker A:** I mean, wait, hang on. OP22 had like, little signs cut out from, like, pieces of sheet metal. Where it had. It was labeled. They had little signs that were like 3 or 4ft tall. Could we do something similar in that staging area?

**Speaker D:** Yeah.

**Speaker A:** Just cut out those little signs and just have it labeled that way.

**Speaker D:** Bouncing off.

**Speaker F:** Yeah.

**Speaker D:** Bouncing off what the conclimated and then also then further dividing it by what is needed at this location in the next hour, two hours, three hours and so on. Or like if practicing the next two hours on one pallet and that way once that pallet is filled, they think. And then be delivered.

**Speaker F:** Yeah. Like if you have like I don't know how they do it. Like if they know exactly what parts they're making per day each week. But that also could be because they're. Because of the way that they're cutting it. They're just making all these random pieces. So I think it would be better to like organize it by piece. And I think another thing that we need to ask is who's actually driving the forklift? Like is it someone from up 7

**Speaker B:** or some of the t. It's Trinidad designated.

**Speaker C:** Oh, it's Trinidad dude. Yeah.

**Speaker D:** Okay.

**Speaker B:** Yeah.

**Speaker F:** So then we need I think one thing that we can do. Cuz I like the light idea. If we put a big light right next to that sheet metal pickup spot and like if it goes off green.

**Speaker C:** Yeah. Like operator presses a button, Shad sees it and knows to come versus some do like hey, every year.

**Speaker E:** Yeah.

**Speaker D:** Yeah.

**Speaker E:** Especially like when his back is turned or something.

**Speaker A:** Can't see it.

**Speaker F:** Yeah, I think that would be a good way to do that. And then we just. I feel like we need to go ask more about the sections that they already have and those palettes and what they. What they're meaning.

**Speaker D:** I think we need to talk. Yeah. Talk to the operators.

**Speaker A:** Yeah, I guess.

**Speaker C:** I guess Chloe's not coming back to the. No.

**Speaker F:** So what else do we actually need to get finished today?

**Speaker B:** We need to do our short term interim changes. But we can't do that.

**Speaker C:** But we don't know that because. Yeah, we can't do that without our root causes.

**Speaker D:** Can we do the is and is

**Speaker A:** not

**Speaker D:** just looping in the method of communication and organization together and just address

**Speaker B:** it as

**Speaker D:** root causes procedure and then answer all those questions to get out of.

**Speaker C:** Yeah. So I'm not going to wrap it out. Do you want to rather.

**Speaker A:** Carry it too?

**Speaker C:** Yeah.

**Speaker D:** Okay.

**Speaker C:** Give me my fishbone back. Do whatever. Sounds like he had nothing better to do.

**Speaker D:** So.

**Speaker C:** I should have just come over here today like at this point.

**Speaker D:** So it was a affected by the problem.

**Speaker C:** The forklift operators and the OP18 operators.

**Speaker H:** Wait, which one are we talking?

**Speaker F:** Or just say the flow from. The flow from sheet metal to op 18. I mean to op 7 to op 18.

**Speaker C:** For who?

**Speaker F:** Yeah, who's affected by it?

**Speaker C:** The flow Is the who.

**Speaker H:** Which.

**Speaker F:** The operator.

**Speaker B:** Which cause are we discussing right now?

**Speaker C:** We're discussing the method of moving materials.

**Speaker B:** I think seven. Seven has to wait.

**Speaker C:** Yeah,

**Speaker B:** it's.

**Speaker F:** It's the. It's both of them.

**Speaker B:** It's.

**Speaker F:** Yeah, yeah, it's altered.

**Speaker C:** It's all down the line. So offset is affecting everything, I think.

**Speaker B:** I think with the is and is not. I think you have to be like super narrow. Like I feel like who is not affected by waiting for the. I would say you can even say 18 because they're waiting 7. But not directly.

**Speaker C:** Right. So who is. Who is direct?

**Speaker B:** I don't know how direct a relation you need to have.

**Speaker D:** Example, for the elevators, it says who is affected by the problem. Those who use the passenger elevators. Who is not affected by the problem? Those who don't use the elevators.

**Speaker B:** Give us the people outside of the sh.

**Speaker C:** Those who don't use the forklifts are not affected by the forklifts. But those who use the forklifts.

**Speaker B:** Everybody in this.

**Speaker C:** That doesn't answer any questions.

**Speaker D:** Okay, I'm sorry, until what. What type of problem is it?

**Speaker F:** Organizational flow.

**Speaker B:** Does that sound good?

**Speaker C:** Yeah, that sounds good to me.

**Speaker D:** What is not the problem?

**Speaker B:** Everything else.

**Speaker E:** What does it say on for not the problem.

**Speaker C:** The number of foreclose, other elevator components, other metal doors in the hallways. But yeah, I think number of forklifts, number of operators.

**Speaker F:** The station that it goes to after Op.

**Speaker H:** 18.

**Speaker C:** Yeah.

**Speaker F:** I fear we hit a wall.

**Speaker B:** Or at least it's gonna hit a wall.

**Speaker C:** I think the bus just ran me over. So the forklift ran the forklift ran me over. Forklifts by another forklift.

**Speaker E:** Let's sandwiched in between another forklift.

**Speaker D:** Let's finish the one and then take.

**Speaker A:** Stuck between a forklift and a forklift.

**Speaker F:** I say we just write down something rough like clearly we're going to have to come back and fix this.

**Speaker C:** Yeah.

**Speaker F:** But like if we can at least get something down.

**Speaker E:** I think we're on a good track with the

**Speaker A:** method.

**Speaker E:** Questions with a method.

**Speaker F:** And I hate that. Like we can't just walk out there.

**Speaker A:** Like it's really far, dude.

**Speaker C:** Olivia, do we have any pending questions that you asked?

**Speaker D:** I'm trying to.

**Speaker C:** Okay. No, I just wanted to make sure that like we had asked them.

**Speaker G:** I think the last one they asked

**Speaker E:** me

**Speaker D:** is about the.

**Speaker C:** For ports or materials. Yeah. Okay.

**Speaker F:** Okay, let's go to. Yeah. Why is this a problem?

**Speaker B:** They're not hitting the photo.

**Speaker C:** That's my picture. We gotta do it directly.

**Speaker D:** What is. So what is happening

**Speaker F:** right now?

**Speaker C:** We're back on. I'm waiting on that question to be answered though.

**Speaker F:** Are we back on what?

**Speaker D:** There's a few more questions.

**Speaker B:** For what?

**Speaker D:** Like there's a few questions to ask under each.

**Speaker F:** Oh, okay.

**Speaker D:** Wait.

**Speaker F:** So this isn't is question. Yeah, this is what is happening.

**Speaker D:** What is happening?

**Speaker F:** OP18 is not able to complete their work because of missing parts. Okay.

**Speaker G:** So sometimes OP7 does not produce enough which causes OP18 to occasionally run out of work due to OP7 delaying them. And then it can be a mix of downtime with maintenance of the machines, a lack of material needed, as well as not having enough operators to operate

**Speaker D:** those machines on that need to do the cutting.

**Speaker C:** So searching for already cut parts is not an issue.

**Speaker F:** Okay, so it's not really an organization.

**Speaker D:** No, I can't.

**Speaker F:** Is pretty much the fact that they can't produce.

**Speaker D:** I think it's been through the training and they don't have cross training.

**Speaker C:** I don't think that. I don't think that has anything to

**Speaker B:** do with this problem with the machines.

**Speaker F:** But that's not something that we can

**Speaker A:** like really talk about.

**Speaker E:** I don't know. The only problem is like there's so many problems. But you can't just tell them to do some of this stuff.

**Speaker C:** Okay. So why if. If OP18 is not getting materials? Because. Because OP7 is not producing enough. Why are they not producing enough? Because they're having to flag down a forklift driver to load the material onto the machines.

**Speaker A:** Yeah.

**Speaker C:** And that's taking too much time.

**Speaker D:** Yeah, I agree with that as well.

**Speaker A:** Where.

**Speaker C:** I think that. I think that's where this is going.

**Speaker F:** Yeah.

**Speaker D:** But she said that's not our only problem.

**Speaker B:** She just read off why they're not producing enough.

**Speaker E:** It was.

**Speaker C:** That's why they're not producing enough maintenance on the machines.

**Speaker B:** Operators are not there to cut.

**Speaker A:** That's okay. Right. So what. What are the immediate obvious solutions of that?

**Speaker C:** That's not a solution.

**Speaker D:** That's not the solution.

**Speaker G:** Sometimes that is an issue on searching for it too. It like the. When it's all on different pallets. Sometimes it could be a problem. Finding the material that is also a problem.

**Speaker C:** But that response makes me think that's.

**Speaker G:** They want to really know how they can increase the run through of and offset for.

**Speaker E:** They want to know how to.

**Speaker D:** So they want to figure out. For us to figure out how to increase the amount of time that OP7 machines are run.

**Speaker A:** Yeah.

**Speaker G:** Or like how can make that more efficient. So OP18,

**Speaker A:** did we ever get a answer for how often those machines Were running.

**Speaker G:** Yeah, yeah, he said. I don't think he had any.

**Speaker D:** Another thing that we can say is

**Speaker G:** that even though not all of those

**Speaker F:** machines are running at the same time,

**Speaker D:** they have a projection of what all.

**Speaker F:** Why can't that forklift just in that one run while it's in that one

**Speaker D:** area to put a piece of sheet

**Speaker F:** metal on each machine even though they're not being ran?

**Speaker A:** Cuz cut times might be different.

**Speaker F:** No, but I'm just saying preload them so that whenever they do get to

**Speaker A:** cut, you don't have to call forklift back over there. I'm saying there might be different cut times. So they might. All four machines might not be open at the same time.

**Speaker D:** Yeah, but can you still load them

**Speaker F:** with a piece of sheet po.

**Speaker C:** You don't know what it's going to be.

**Speaker A:** So you get the order.

**Speaker F:** They know like if they have the week before, like they have everything that they're cutting this week. Okay. And they have everything that they need to cut today. Can the forklift go in there in the morning and just load whatever metal it is that needs to go on each machine onto set machine? That way whenever they're cut, say that he loads them all at 9, one of them gets cut at 10, one of them get gets cut at 2, one of them gets cut at 3. But they're already loaded, so we don't

**Speaker A:** have to call back over the forklift. We can only have one loaded at a time.

**Speaker B:** What if we slap some sort of

**Speaker C:** rig because machine's only so big.

**Speaker A:** Yeah, it's a space thing.

**Speaker F:** Yeah, but it's three. It's four separate machines.

**Speaker A:** Right, so you have four separate sheets loaded.

**Speaker F:** That's what I'm saying. They're all loaded.

**Speaker A:** Right. But if, let's say, okay, like you're

**Speaker C:** saying you could live three sheets into one machine.

**Speaker E:** No, no, no, no. Three sheets.

**Speaker F:** So that way even though machine one isn't running, it's loaded and ready for the next time that someone runs it.

**Speaker A:** But let's say, let's, let's just say machine one, it takes two hours to cut through that sheet and machine two takes one hour. So you get through that out after that first hour, machine two is done. But machine one still has another hour. Does machine two have to wait a whole hour before getting loaded? So when machine one is done, well

**Speaker F:** how many times are they loading these things a day?

**Speaker A:** I don't know.

**Speaker F:** And so like if they're only getting loaded once, why can't the forklift just

**Speaker A:** do it all at one Time

**Speaker D:** because

**Speaker C:** it takes a different amount of time for each one to run. They're all different.

**Speaker F:** I'm just saying put the sheet of metal on all 4 meters machines. Not saying that they need to be turned on or cut right then and there.

**Speaker A:** They're just loaded if they're not.

**Speaker F:** But you have to load it before they even start.

**Speaker A:** Right.

**Speaker B:** You. So you could load them all at once but you can only do that at the very start of the day.

**Speaker D:** That's what I'm going to get out

**Speaker F:** of s. But what if they're only cutting once on each machine per day?

**Speaker C:** They're not.

**Speaker A:** There's no way they're doing that.

**Speaker F:** Okay, but either way that still cuts down time of having to track them down. Would it not? You're going to have to track them back down. But like if they're all four already loaded that saves you four times of having to call Trinidad. Right?

**Speaker C:** Yeah.

**Speaker D:** I think we should take a stretch break and then come back down. And somebody. We should finish this. And then also somebody should make sure we have all the information that Caleb has given Olivia. And it's written down on a sheet of paper so it's organized. Cuz I don't know how well the pits bits and pieces have been written down.

**Speaker C:** So can two of y' all get with Olivia and to that this like very sporadic. So.

**Speaker A:** Yeah.

**Speaker D:** So who wants.

**Speaker E:** I just need to take a little potty break and then.

**Speaker F:** Yeah, I think we need.

**Speaker A:** I mean take a break now.

**Speaker C:** We only have another 45 minutes here. So make it.

**Speaker B:** Yeah, we like it.

**Speaker E:** Even though.

**Speaker C:** Emily, you're doing great.

**Speaker F:** Understand what I was saying though?

**Speaker A:** I understand what you're saying but I.

**Speaker D:** I don't know how those machines.

**Speaker C:** Unless you like. I'm just like hate your life right now.

**Speaker D:** Don't. Okay.

**Speaker E:** Please.

**Speaker C:** No, please keep doing it. We do but it's okay. Like.

**Speaker D:** Well, the thing is I want.

**Speaker A:** If it comes down to literally can't work on it. Yeah. You could load them all at the same time. But if they finish at different times then those machines are just sitting there and the whole thing is we're. They're not producing fast enough. We don't want to waste any time where they could be running.

**Speaker C:** Does that make sense?

**Speaker F:** But how would you be wasting time? The sheet metal is already on there. You could press go.

**Speaker A:** Right. But you can only. So here I'll. I'm just gonna kind of.

**Speaker C:** So the only problem with that is the forklift drivers are also coming in at the same time the operators are. So it's not like they're preloading it before the operators.

**Speaker A:** I'm going to steal a piece of paper from weeks.

**Speaker C:** Like there's still time waiting for them to be loaded with the.

**Speaker A:** Do you mind if I still.

**Speaker F:** I know, but like once they call them, if they could just load all four. Wait, I really have to go take.

**Speaker A:** Okay. All right.

**Speaker F:** You can.

**Speaker D:** Yeah. Pause your brain and let.

**Speaker C:** Your brain is running.

**Speaker A:** I'm. I'm like, my brain's running at a million miles an hour because I'm trying

**Speaker C:** to like, I get what she was trying to say, but like that's not how that works.

**Speaker A:** That's not how that works. And I think. I'm gonna be honest, I'm trying not to get frustrated. But everybody. You guys are focused way too much on the forklifts. Well, that's not the only. What I am. I am. I'm sorry, but we're way too narrow minded on this. I feel like. I think we need to kind of look at the big picture.

**Speaker D:** Guys, my positive message bot, which I think may be funded by AI just sent me a message. The message is being independent is great, but you're never supposed to need nobody. It's okay to let people show up for you sometimes too. So it's okay to breathe and let other people help you.

**Speaker C:** Anyways, Olivia, y' all use AI here. Do you all have like a local model, distilled or something that we have co pilot and that's all we can use that's secure?

**Speaker G:** Yeah, it's. It's very like tailored just to us. That's why we've like told it what you know, giving it parameters.

**Speaker C:** Okay.

**Speaker G:** And sometimes like you'll say like, oh, I can't. I can't try that.

**Speaker D:** Or I can't show the range. It'll give you certain things.

**Speaker C:** Okay. Is there a central database you'll use for like operation planning? Like big picture? Like do y' all get like. Like, does the government send in. We want this ship and like creates a work order with stuff for.

**Speaker G:** We get a lot of different stuff.

**Speaker C:** So there's not one system that this company was. Is there any software we use that was developed in house though? Or do you all just use Microsoft's?

**Speaker A:** Really frustrating because big picture. And then we're like, okay, yeah, yeah,

**Speaker F:** More like power bi.

**Speaker D:** Yeah.

**Speaker G:** We're in a very transitional period right now.

**Speaker D:** Of all the tools that we use

**Speaker A:** and how convert softwares.

**Speaker G:** Okay, I'm trying to go through all the questions.

**Speaker E:** Yeah, just. You want a sheet of paper?

**Speaker B:** I feel like first

**Speaker C:** Jack Scarlet.

**Speaker B:** I feel like when we come back in and ref sit down and say they are not cutting enough. Now we need to say regardless of the people, regardless of money, what would get them cutting enough? Because that's what D3 is.

**Speaker C:** Yeah.

**Speaker A:** Right.

**Speaker B:** That's where we need to be done with today. I feel like it's not. Is like.

**Speaker H:** I don't think.

**Speaker C:** I don't think that's the end all. Be all.

**Speaker B:** I think we need to sit down and say, what is the. What can we do to cut more pieces?

**Speaker C:** Yes.

**Speaker A:** Right. I think we need to just. Very frustrating that we're getting run around. We're running around in circles because somebody's like interjecting like, oh, this isn't gonna work. And then we over and over.

**Speaker H:** Yeah.

**Speaker B:** It's like, even if they only do it for a week or a month, it doesn't matter. Doesn't matter if that's not a solution. Doesn't matter if it's not a good idea.

**Speaker C:** It's like.

**Speaker A:** Right.

**Speaker B:** But it would get them.

**Speaker A:** We are throwing whatever it takes to fix the problem right now. Not for a year, not for forever. Right now.

**Speaker C:** So we have our root cause.

**Speaker A:** Yes.

**Speaker C:** With what?

**Speaker B:** Well, she told us that at least they think the reason is that they are not producing enough is because a lack of needed materials.

**Speaker A:** Yeah.

**Speaker B:** Lack of what needed materials?

**Speaker C:** Maintenance downtime.

**Speaker B:** Maintenance downtime for the cutting machines.

**Speaker C:** Okay.

**Speaker B:** And then lack of operators is what she told us from that email.

**Speaker A:** It. It all comes down to the machines aren't running enough for whatever reason. All three of those reasons are having the same effect. The machines aren't running enough. I think that's the root cause.

**Speaker B:** One that could help with not cutting enough is we. They're cutting pieces they don't need yet. And yes, that is saving them on scrap. But you need. I think they need to prioritize the pieces they need because that will cut down your cutting time a lot. Because if only 50% of what you're putting on this piece is things you need right now, then the rest of the. Of that piece is wasting time of that day.

**Speaker F:** And maintenance is taking so long. Like, why are you wasting time cutting stuff that you don't need it?

**Speaker B:** Like, you have one full cut and

**Speaker F:** then you have to go through.

**Speaker B:** If you have 120 minutes of cutting before you need to do maintenance. That should all be the things.

**Speaker C:** I'm asking another question. But how do they decide what to cut?

**Speaker A:** Is that important? It's probably just. It's probably based on whatever materials.

**Speaker C:** Because there's like, are they picking. Production control is sending it, who is

**Speaker F:** sending them what they need to cut?

**Speaker A:** And they're probably just cutting based on whatever material they're using. But they're cutting.

**Speaker C:** Like is production control sending all the orders for the day and the operator is picking the easiest ones first. Like, is that something we need to ask?

**Speaker A:** Would they probably do it too? Here, let me see

**Speaker D:** their method of

**Speaker F:** how they are, their method of what they are sending to the operators.

**Speaker A:** So I think what it is is they're getting let's say a list of 100 things, right. And let's say they need these parts in aluminum and this parts in steel at this gauge or at this gauge, whatever. Right. And they're looking down the line, they're saying, okay, we can fill up enough of, let's say this is steel, let's say it's 16 gauge steel. Right. And they say we need this, this and this today. Right. We need three rectangles.

**Speaker C:** And then they fill the rest of

**Speaker A:** the sheet up and they fill the rest of the sheet up with circles. But they don't need circles until next week, right?

**Speaker H:** Right.

**Speaker A:** If they spend that, all that is wasting time. And if the machines are limited on their uptime and they need to move on the things they need today, if they need aluminum rectangles, well, they're making steel circles. They need to just maybe, maybe they need more scrap. Maybe they, they don't have to worry about how much scrap they have. They need to focus on going down that list linearly.

**Speaker B:** Yeah, I agree.

**Speaker F:** Like week by week. Like what they need to make and face the facts, they know it, they're making it for these ships. Like they know what piece.

**Speaker A:** Right? Because I, I'm thinking, I was just thinking about this. I'm like, we're kind of thinking about reducing scrap or whatever, but I think the solution, maybe it's just we need to be okay with how much scrap we have.

**Speaker B:** At least D3 solution at least.

**Speaker A:** Yes. Short term, we're okay with scrap. I think that's our short term solution.

**Speaker C:** You okay with scrap? Are you okay with scrap? Like if we have more scrap but we're getting parts faster, are we trying to avoid scrap at all costs?

**Speaker A:** At least for our short term solution? If we just said they go down the list linearly regardless of how much scrap they have in that interim.

**Speaker D:** This is not like the long term solution in the framework that we're, we're being told to use for this. The short term solution is all money. Throw everything at it. To solve a problem immediately and then address the long term.

**Speaker G:** So are you saying try to like

**Speaker B:** use this crap or so so like like what they're doing right now. If. If they're cutting.

**Speaker C:** Explain that to them.

**Speaker A:** I can maybe. I can maybe show you what I just showed them here.

**Speaker D:** Okay.

**Speaker A:** Okay. So let's say you got three sheets. Right. You've got like. Let's say 16 gauge steel.

**Speaker B:** Say something PC is they're writing 12 pieces programs into something or the next week or whatever they do it.

**Speaker A:** They're both departments. Right. They get however many some assemblies for this week. 16 gauge steel.

**Speaker B:** I don't care what all you bring

**Speaker A:** us but we can bring in a week. They need. Because circles.

**Speaker B:** It looked like they had a lot of stuff there.

**Speaker A:** So what they're. It looks like they're doing right now is they're cutting out those circles right now.

**Speaker E:** But.

**Speaker B:** But they have so much stuff there. But apparently it's not cuz they're saying

**Speaker C:** there's a lot unless to that.

**Speaker B:** So they need all the circles are cut out to have some sort of vacation from.

**Speaker A:** Would it be a good idea for short term and we kind of get

**Speaker B:** more permanent materials a lot.

**Speaker A:** Don't worry about the circles right now. Don't. Don't worry about this. This what we need next week. And cut out.

**Speaker B:** I don't know how to do that cuz I don't know how the programming and writing works that are.

**Speaker C:** The first time we saw this was today.

**Speaker B:** So it's like we can't give you a super explanation if we do that. Where it's better communication and just bring us what we need for this week.

**Speaker D:** So they're cutting things out of order

**Speaker A:** and that's why there's that massive pile of stuff in the staging area. So I think that's kind of what we're zeroing in on for a short term fix really.

**Speaker C:** But then because you know the answer.

**Speaker G:** I don't know the whole answer but I'm not.

**Speaker C:** You have a pretty good idea though. Yeah.

**Speaker A:** Yeah.

**Speaker B:** It's really fun to do a project when there's hard.

**Speaker G:** Sorry.

**Speaker C:** No you're not.

**Speaker G:** I can't like here too much.

**Speaker C:** Okay.

**Speaker B:** So cut linearly pretty much what we maybe.

**Speaker D:** Yeah. I don't know.

**Speaker B:** And maybe just throw it. Get it operator. So you could run all four of them there just four machines right?

**Speaker C:** Yeah.

**Speaker B:** And only three. You're running out of time. You only have three per shift. Get another guy short term.

**Speaker C:** But you have maintenance downtime though. So I don't think another Guy is on the table. Forget the other guy.

**Speaker A:** Forget the other.

**Speaker F:** I think it's smart.

**Speaker B:** Forget the other machine.

**Speaker A:** Well, no, I think that machine.

**Speaker C:** We assume you have one.

**Speaker F:** I can do two of them. So that once he's done with one,

**Speaker B:** while one is being repaired, you can do the other one.

**Speaker A:** It's a good safety.

**Speaker B:** I feel like we just need all the.

**Speaker C:** Wait, it says the one machine nobody knows how to run in the sh.

**Speaker B:** Well, that can't be. They can all. I think there's three kinds of machines and four machines. Two of them are the same. So one guy can technically run either one. But an operator is only allowed to run one machine.

**Speaker F:** I think our problem for manpower needs to be solved by cross training. I think that's the simplest thing and the best thing that we could tell them.

**Speaker A:** We can't tell them to hire another.

**Speaker B:** We don't know how or how long their machine maintenance downtime is happening. Yeah, we don't know if that's consistent at all.

**Speaker D:** Because also you're cutting for outages like say because you have three people scheduled. But what if the three people you have scheduled to work off seven are trained on just two of the machines? Because you can have people changing the shifts.

**Speaker A:** Well, how long does that take? Is that something we need as a long term solution or is it simple enough to teach where we can use that as a short term solution?

**Speaker B:** I think that's better as a long term. I think short term you get a fourth operator. So at best case all four can be running at once. But best case, if they're all operational, you can't be running all four at the same time. Which I think is a problem.

**Speaker C:** Thank you.

**Speaker D:** Because they said they have eight operators overall on OP18. And if during the day and time you move one of the extra, when you have five, they can move one over to OP7 and have running more during the daytime. What?

**Speaker F:** I don't think we do.

**Speaker D:** I don't think we need another person.

**Speaker B:** Not even for short term.

**Speaker G:** No.

**Speaker A:** Okay.

**Speaker F:** Because then either way a short term turns out into a long time, then you don't have to find that person.

**Speaker B:** That's, that's the whole point.

**Speaker C:** That doesn't matter in this case. But I don't think.

**Speaker A:** But still, I don't even. I mean you can just pull them from somewhere else temporarily and then having

**Speaker C:** a person is not going to solve the problem.

**Speaker B:** But for a short time you're already going through.

**Speaker F:** Then you're already going through training that person. So why not just train someone who's already been around these.

**Speaker C:** And then plan for maintenance downtime. Because maintenance.

**Speaker E:** What if.

**Speaker B:** Or enough time to make it worth it.

**Speaker D:** One of these machines can only run at a time.

**Speaker F:** There's no need to have one person per machine.

**Speaker E:** Only one point at a time.

**Speaker F:** Who said that earlier?

**Speaker B:** Only an operator can only run one at a time. But they have three operators right now.

**Speaker F:** Oh they could run theoretically.

**Speaker A:** Because they could be running four at once. Would you. They usually have dumps and you can't.

**Speaker F:** But also these machines. I don't even think that these machines

**Speaker D:** are reliable enough to say that we can run it one time. You may have two pumps for the same slot because if one's down you want to keep running so you have a spare.

**Speaker A:** I also think that works out that the machines that there's a duplicate of the two machines are the least efficient. They're the most likely to break. So if one breaks the other one is there and same machine.

**Speaker E:** Right.

**Speaker A:** Right.

**Speaker C:** Yeah. Well

**Speaker B:** I'm clearly outvoted. I feel like we have at least for the other two things.

**Speaker C:** What was your short term solution as a person? That was you.

**Speaker B:** Well we were talking about communications to the materials yard to bring us what we need for the week or the coming week and just cutting linearly what we need this week in order. Don't jump ahead and just accept the fact we're going to have scrap.

**Speaker F:** That can be.

**Speaker B:** But the whole point of d3 is like this is not an efficient solution. This is not a smart solution. But it's the solution that gets it going.

**Speaker E:** Right?

**Speaker D:** Yes.

**Speaker C:** Yes.

**Speaker F:** Yeah.

**Speaker A:** Yeah.

**Speaker F:** And I think that.

**Speaker A:** Whatever.

**Speaker F:** And I think that's.

**Speaker B:** I think that's good.

**Speaker D:** Okay.

**Speaker F:** Also still don't know why we can't

**Speaker D:** load all of them at once.

**Speaker E:** They don't only need the forklift to move the materials. They use the crane as well.

**Speaker B:** Do they have a crane over there?

**Speaker E:** Yeah.

**Speaker B:** There's no red crane for moving it

**Speaker C:** to the tables or for moving it from station to station.

**Speaker E:** Yeah. So they are. OP7 can use the crane.

**Speaker A:** Do they use it

**Speaker G:** up here?

**Speaker D:** And it moves along the shop.

**Speaker B:** There's one of them.

**Speaker G:** I think there's one.

**Speaker D:** And it moves. I asked that question. I don't know if he answered it.

**Speaker G:** I can try to ask him again.

**Speaker C:** Okay.

**Speaker G:** But so they don't always. To get the material into the machine.

**Speaker D:** They're not always just waiting on the forklift. They can use the crane.

**Speaker F:** Who's controlling the crane?

**Speaker G:** The operators will use the cranes themselves.

**Speaker F:** How is the. Then how on.

**Speaker D:** I'm just confused.

**Speaker F:** How is there any. How is that not. How is that an issue? If we have a forklift and a crane, they're not always available.

**Speaker B:** The whole shop. These are the main issues. And loading it was not one of them.

**Speaker F:** And Trinidad seems like he's always there. He seems like he's always.

**Speaker B:** I think it's 100% efficient, but I don't think that's what they see.

**Speaker C:** That's not the problem.

**Speaker B:** They're most.

**Speaker G:** Yes, because I said the question that I asked him. It said, how does the forklift driver know when to load the material onto the machine? Does the operator ask for them to come over? And he said yes, or the operator will use the crane. And I specified the overhead crane.

**Speaker D:** And he said yes.

**Speaker F:** So our main issue is, when it comes down to it, his communication throughout the whole. That whole OP and getting the sheet metal from where it comes from to here.

**Speaker C:** Well, it's what OP18 needs urgently that week.

**Speaker F:** Yeah.

**Speaker C:** Needs to be communicated to production control.

**Speaker F:** And then the communication between Trinidad and when he needs to go and get that stuff.

**Speaker C:** I think that's not important based on what she said. Yeah. I don't think that's an issue.

**Speaker F:** Yeah, it is. Because she said she. That they've been. It's just not our main issue. But it is still.

**Speaker B:** Right.

**Speaker C:** I mean, it is an issue, but that's not.

**Speaker F:** It's something easy that we could give a solution on how they could fix it. I feel like it's still something that

**Speaker A:** we can break off.

**Speaker C:** Yeah.

**Speaker A:** I don't think our solution is just like this one thing. I think it's like 2 or 3

**Speaker C:** smaller because our original individual things, our original scope.

**Speaker A:** Right.

**Speaker F:** Which we need to. I think we're harping too much on the root cause. I think we need to. We realize that there's individual root causes for each.

**Speaker C:** Investigate and identify process. Bottlenecks.

**Speaker A:** Plural. Plural, plural. Yes. We have all of our bottles.

**Speaker B:** Okay.

**Speaker F:** We know them in the.

**Speaker C:** What short term and long term can be made.

**Speaker D:** Yes.

**Speaker C:** You cannot enter your band. Yes.

**Speaker A:** Okay.

**Speaker C:** We asked to write this down.

**Speaker A:** Yeah. Here. Sorry, I'll give you back.

**Speaker G:** Okay.

**Speaker C:** So this would be containment plan.

**Speaker B:** Right, or what?

**Speaker A:** Yes.

**Speaker F:** So let's write down all of our bottlenecks.

**Speaker C:** Okay.

**Speaker F:** From the beginning to the end.

**Speaker A:** Okay.

**Speaker F:** So communication with what materials need to come from the material yard. Lord knows where that is or what that is. What needs to come for that week. Communication to them. That's our first bottleneck. Then our second bottleneck is flagging down Trinidad to get the materials onto the machine. Our sec. Our third bottleneck is the machines working. But that's not something that we're trying to fix. I don't. Yeah, I would say more what the programmers are the production control. What production is telling to produce.

**Speaker C:** No, no.

**Speaker F:** Yeah, like what they're telling to cut on the sheet. That's a bottleneck because they're not cutting all the pieces.

**Speaker B:** Cut linearly in what is needed for that week. Don't cut beyond.

**Speaker C:** That's the solution. What's the problem?

**Speaker F:** The problem is.

**Speaker B:** The problem is we're cutting.

**Speaker F:** But the problem is cutting.

**Speaker C:** Cutting too far in advance.

**Speaker F:** Cutting too far in advance and using

**Speaker B:** your limited uptime of your functional machine on parts you don't need yet.

**Speaker D:** And then cross train which.

**Speaker B:** Who are you thinking of cross training? Like people from hop 18.

**Speaker D:** I'm thinking about cross training op 7,

**Speaker C:** the three operators and just having all

**Speaker A:** of them be able to run any machine.

**Speaker B:** One really fixed the issue because the problem is there's only three of them. If one of them is sick, there's still only two people. Even if they know how to run all four of them, they can only

**Speaker H:** run two of them.

**Speaker D:** Yeah, but if one of them is sick and the machine the other knows how to run is down, I think

**Speaker C:** that's a more long term deal.

**Speaker D:** But I still think it's a bottleneck because like take for example, If you some reason have a shift, have to change the shift and who's there, you may end up with two people who are trained on the same machine but not trained on another machine. And then all of a sudden you have an extra person that has to go home.

**Speaker G:** Yeah.

**Speaker F:** I think the bottleneck itself is the fact that the three people operating in OP7 aren't trained on each machine.

**Speaker B:** In his text with her, the guy on the chalkboard explicitly says there's not enough operators in opset.

**Speaker G:** It may only be able to run

**Speaker C:** to run all four machines, but I don't think you need to run all four machines. The solution is not add an operator. They would have done that already.

**Speaker D:** Yeah, the only, where the only place I would see adding an operator is for someone from OP18 to come help.

**Speaker F:** Okay, but we're talking about the bottom office. Not trained enough.

**Speaker C:** Not cross trained on machines.

**Speaker F:** Operators and OP7 not cross. Not skilled in each.

**Speaker A:** Just put maybe not enough trained operators. I think for now we can kind of narrow that down and kind of come up later.

**Speaker F:** And then let's.

**Speaker A:** Let's just put not enough trained operators. That's the problem. Next bottleneck moving from that's seven.

**Speaker F:** Op 18 is unorganized.

**Speaker A:** True.

**Speaker F:** Unorganized pieces spread out that people have to look for because it's still a bottleneck. And I think those are our main bottoms. Cuz once it gets to off 18,

**Speaker A:** that's pretty much

**Speaker B:** we don't know.

**Speaker E:** But they're.

**Speaker A:** We don't care.

**Speaker B:** Yeah, we just don't know.

**Speaker F:** Okay, so those are all of our bottlenecks. Will you read those off soon?

**Speaker C:** Communication from the material yard.

**Speaker F:** Yes. Okay, keep going.

**Speaker C:** Flagging down the forklift operator to load Trinidad. The cutting machines.

**Speaker D:** Okay, keep going.

**Speaker C:** Production control. Cutting pieces too far in advance or sending work instructions to cut pieces too far in advance. OP7 not being cross trained or not having enough training or.

**Speaker A:** No, not having enough trained operators.

**Speaker C:** Yeah. Not have enough trained operators.

**Speaker F:** We get what we're saying.

**Speaker C:** Unorganized. Moving from op 7 to op 18.

**Speaker A:** Yes.

**Speaker C:** And those are our bottlenecks in the process.

**Speaker F:** And now we need to short.

**Speaker C:** That identifies our root cause, which. Remind me what our root cause is. Shut up. Shut up.

**Speaker B:** What is it?

**Speaker A:** Machines don't have ar. It's not enough uptime on the machines, I think. Is that what we said?

**Speaker C:** That was our first initial. Oh, no, no. So initial problem is OP7 can't support.

**Speaker A:** It's what, not enough uptime on the machines.

**Speaker B:** That's. Wow, it's so simple.

**Speaker C:** Would you say just cutting machines? Seven cutting machines?

**Speaker A:** Yeah.

**Speaker F:** Okay then. For each of our bottlenecks, we need a short term solution for all of this. So for our first one, which is.

**Speaker C:** Okay, hold on. Another piece of paper.

**Speaker F:** Okay, so like just number.

**Speaker A:** I'm like going to all four containment panels.

**Speaker C:** Can we ask that? Can we push another question through? How far ahead does production control

**Speaker B:** get of OP7? Because PC is the one who writes the programs for the cutting machines, correct?

**Speaker A:** I don't think they write the programs. I think they just send out a part list. Okay, right.

**Speaker F:** They do. And then the operators know how to program them.

**Speaker C:** I had a question and then it. No, you're fine.

**Speaker B:** I interrupted you.

**Speaker G:** I'm sorry.

**Speaker F:** How far in it? I think what you were gonna ask is how far in advance do they know? Like do they know what all needs to be made?

**Speaker C:** Like say how far in advance do they send instructions to two cutting machines to be made?

**Speaker A:** Obviously the queue time, even if they

**Speaker F:** don't know that that's something that they should know and something that we can suggest as a short term.

**Speaker A:** Like

**Speaker B:** 100 pieces back long. Do they have 200? Do they have a thousand? Like how far back is.

**Speaker C:** I don't know how you ask this. I don't know how you ask this concisely, but when they're making a sheet, obviously they're putting like say they're doing a 16 gauge aluminum sheet and they're going to put the pieces on there that they need urgently and they're going to fill up the rest of that sheet. How far in advance are they like

**Speaker D:** pulling parts, Pulling the part that they need a week in advance on this sheet, or are they making the part that they need?

**Speaker C:** Does that make sense?

**Speaker D:** The most advanced that they need?

**Speaker B:** I think it's bound to happen.

**Speaker H:** Trusty team leader, how we doing?

**Speaker C:** We're doing good.

**Speaker H:** You where you need to be?

**Speaker C:** It's not written on here, but yes. Our root cause is not enough uptime on those OP7 machines. And then we've identified the bottlenecks and then we're gonna figure out a containment plan for those bottlenecks. Okay, and then we'll be done for today.

**Speaker B:** Yeah, I think we've kind of we got where we were supposed to and

**Speaker C:** I'll feel good about that when we're done with.

**Speaker H:** Okay.

**Speaker C:** What time is it?

**Speaker A:** It's three.

**Speaker F:** Okay, so do we want to go

**Speaker A:** through and jot off short term?

**Speaker B:** We'll see how.

**Speaker F:** Okay, so the first one is we having enough stuff.

**Speaker B:** You've done what we've done the one.

**Speaker H:** Okay, you need four or five of those if you can get them. Is and is not.

**Speaker B:** Is that one could be done today or is that we were kind of planning on?

**Speaker C:** I fear that may not be done today.

**Speaker H:** The is and is not.

**Speaker C:** It isn't. It's not okay.

**Speaker H:** As long as you can get it done.

**Speaker C:** It'll get done.

**Speaker F:** Yeah.

**Speaker A:** It sounds like we're coming in early.

**Speaker B:** Good call. All right, what's the next bottleneck we

**Speaker F:** need to short term?

**Speaker C:** The first bottleneck is communication from the material yard.

**Speaker F:** So our short term solution would be. Well, I feel like this is more long term, but I think the only way that you can do this is long term is by having better communication of what needs to be made per week and relaying that to the drivers who move those stuff over. So gather.

**Speaker C:** Where are we saying the material yard is like outside?

**Speaker F:** No, just where we don't know. It's wherever all these sheet metals come from. They have to come from someplace.

**Speaker C:** Is that an issue?

**Speaker B:** Yeah, they explicitly.

**Speaker F:** It's outside of ourselves.

**Speaker B:** The lack of materials needed is an issue in question that y just posed.

**Speaker G:** I said when they're cutting on a sheet, how Far advanced. Are they cutting material that they'll be using later?

**Speaker D:** Like, like doesn't make any sense.

**Speaker F:** No, we already know that. We already know that they're cutting pieces for future use.

**Speaker D:** But like, how far ahead?

**Speaker G:** Far into the future.

**Speaker F:** Yeah.

**Speaker D:** How far is the head into the future?

**Speaker F:** I don't think they're going to know that. Why are we asking that?

**Speaker C:** We're asking that to see, like if we're pulling stuff that's due in like three months, that's taken up cutting time that could be used for something else.

**Speaker B:** To be in our cars. Yeah, we have 19 minutes to be in our cars. So we got like 10, 10 minutes to work. So.

**Speaker D:** Okay, let's go.

**Speaker B:** I, I, it could be a phone call.

**Speaker C:** It could be an email of the

**Speaker B:** next X amount of parts.

**Speaker F:** Just saying.

**Speaker B:** I would say that to be stocked

**Speaker F:** they have to communicate for however many weeks or month in advance to have that stock outside of the building. Because you know how they have all those sheets outside of it. So you could say we need a heftier pile of stuff outside. So that way we're never waiting for material to come from the sheet metal.

**Speaker B:** Sheet metal.

**Speaker D:** Okay, what's the next?

**Speaker A:** It could be they're just missing the like search.

**Speaker F:** Did you get that?

**Speaker B:** They're probably using something they need to

**Speaker C:** create an inventory plan for the next.

**Speaker F:** Inventory plan for planning ahead.

**Speaker A:** Yes.

**Speaker C:** Perfect for raw materials.

**Speaker D:** Yes.

**Speaker C:** Okay.

**Speaker A:** Yep.

**Speaker C:** Next one's forklift is flagging down the forklift operator to load the machine.

**Speaker F:** I say the life and walkie talkies. A walkie talkie would be really easy. That's a short term thing.

**Speaker A:** That's a good idea.

**Speaker F:** And then we can install a light later, long term that Trinidad knows, like whenever it's green, it's time to go.

**Speaker B:** Okay, next one.

**Speaker C:** I have more idea on that, but let's continue.

**Speaker F:** We can get deeper into all of these, but I think it's good to just write down the gist of production control.

**Speaker C:** Cutting pieces too far in advance.

**Speaker F:** So that's the line. That's like a, that's like a strict organizational thing. We have a chart of what all needs to be made this week, what all needs to be cut this week.

**Speaker B:** Like and just you cut in as much linearly down the line. It doesn't matter if you're not using the whole sheet, you just cut down

**Speaker F:** or like a day by day plan of what needs to be made and cut that down.

**Speaker A:** That might be a really good long term goal. Okay. We want production control.

**Speaker E:** If all three machines are running at

**Speaker B:** Once

**Speaker E:** it'll be about five and a half hours. Each machine will be used for about five and a half hours in the day and then want to cut down on that via the time.

**Speaker A:** Wait, they want to reduce the time that the machines are running?

**Speaker E:** No, they want to, I mean they want to increase it but they want to decrease the time that it takes to, you know, supply the machine and.

**Speaker A:** Oh, okay, okay.

**Speaker E:** Yeah but, but on average each machine is used for about five and a half hours a day.

**Speaker B:** I don't think we're going to today.

**Speaker A:** I think that that's so they're just

**Speaker D:** lining him down like having the walk and talking so they can say hey, I'm almost done with this.

**Speaker F:** Making sure that the material is outside and ready to be picked up. Making sure that we always have that material.

**Speaker D:** Okay, good.

**Speaker B:** Last ones.

**Speaker D:** He said the goal is to have

**Speaker G:** a two week lead time in OP7 and OP18.

**Speaker F:** Like their long term goal is they need to have a meeting at the be at the end of each month knowing exactly what they're going to make that next month.

**Speaker A:** I wonder if they have.

**Speaker F:** That would be the smartest.

**Speaker B:** That's exactly.

**Speaker F:** And then divide it up week by

**Speaker D:** week of what they need to know.

**Speaker C:** Okay, next in there op seven not cross train. Not enough trained ops.

**Speaker B:** I'm cross trained with people 18 I would do the same.

**Speaker A:** And, and all three of them operators

**Speaker F:** in op seven need to know how

**Speaker B:** to work all of those machines.

**Speaker F:** I think the main short term focus is all three of those operators know long term would be get in some people from op 18 in case ops 4. If op 187 people can't do it unorganized.

**Speaker C:** Moving from op 7 to op 18

**Speaker F:** organized structures of how to actually organize.

**Speaker A:** Here's my kind of thought process behind the training. I don't think short term there is a solution for that because training takes time. I think.

**Speaker F:** But our short term answer is you need to train.

**Speaker A:** I think.

**Speaker C:** Well, I think the short term answer is you'd only train the three.

**Speaker D:** Yes.

**Speaker C:** You only cross train the three operators on the machines currently.

**Speaker A:** Well, is that something we can do as a short term solution or is there if there's like. Because we got to think it takes time to train them. If it takes time then it can't be a short term solution. Right. If it takes a week to train these guys in all those various machines,

**Speaker C:** I argue that's a short term solution.

**Speaker B:** I would too.

**Speaker A:** Okay then sure.

**Speaker C:** When a ship takes you two years to build the week, it's a short term.

**Speaker B:** If we're cutting linearly. We don't have to organize it because the parts will come out as needed.

**Speaker F:** Which I don't think. But that's not what they want to do. They want it two weeks in advance.

**Speaker B:** But then we can organize by sub assembly if it's coming up.

**Speaker E:** What are you getting?

**Speaker D:** They want two weeks.

**Speaker A:** Two week lead time.

**Speaker D:** They try to cut.

**Speaker A:** That's what they just told us.

**Speaker H:** Yeah.

**Speaker B:** Pretty literally is going to create plus inventory.

**Speaker A:** If they're gonna.

**Speaker B:** Even if it's 9/10 of it is linearly that 1/10 is slowly gonna stock up.

**Speaker G:** The out of sequence happens if OP7 hasn't completed. It says sometimes it gets out of sequence. When OP7 has a bill that wasn't fully run and OP18 snatched it before it was finished. And that gets out of sequence. Or sometimes. Sometimes if something gets messed up in obtain or optimal 2 and it may.

**Speaker D:** So it sounds like need some sort of indicator when the pallet is completed.

**Speaker B:** I suppose so.

**Speaker A:** Or some sort of indication like that maybe. Okay. Oh, here's. Here's a short term solution for that. So you know how on the ladders they have the cl. You can climb on this ladder and you can't climb on this ladder. What if we had something similar? We just had like a tag where it's said pallet's done. Pallet's not done.

**Speaker B:** Yeah, I like that.

**Speaker C:** Like green tagging or something.

**Speaker A:** Yeah. Like green versus red tag. Like don't touch it. It's not ready. Versus you can take it and like

**Speaker C:** yellow for like missing parts or something. Like.

**Speaker A:** Well, I mean then it just be red. Just say don't take it yet.

**Speaker G:** It's not ready.

**Speaker F:** You need to know more about what they're actually making. Like how many pieces are cut that go into one person's subsection. Like. Or is it moving down the line? It's like one person only worried about mending these two pieces together. But then the whole sub assembly is actually 10 pieces.

**Speaker A:** Right. That's what I'm saying.

**Speaker F:** We need to know more about the process to give an actual organized answer. Because we're just blindly saying that we need to organize it. We don't know how to organize it.

**Speaker E:** Correct.

**Speaker C:** Or if it even needs to be organized.

**Speaker F:** It needs to be organized in a way of like either by pieces but there could be hundreds of pieces or

**Speaker A:** by what needs to be assembled.

**Speaker C:** Do we need to go back out there tomorrow?

**Speaker A:** Yeah.

**Speaker B:** So just write something wrong.

**Speaker F:** We already are.

**Speaker A:** I'm not gonna write something.

**Speaker F:** Was that our last bottleneck though.

**Speaker C:** Okay, we're done for today.

**Speaker A:** Good. We got five minutes to spare.

**Speaker B:** I'm just gonna leave my notebook here.

**Speaker D:** Should I do like I'm pretty sure it did? Because I.
