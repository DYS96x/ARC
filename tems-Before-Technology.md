warning: in the working copy of '06_ARCHITECTURE/ADR/ADR-0001-Systems-Before-Technology.md', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/06_ARCHITECTURE/ADR/ADR-0001-Systems-Before-Technology.md b/06_ARCHITECTURE/ADR/ADR-0001-Systems-Before-Technology.md[m
[1mindex 9456729..fe4be6a 100644[m
[1m--- a/06_ARCHITECTURE/ADR/ADR-0001-Systems-Before-Technology.md[m
[1m+++ b/06_ARCHITECTURE/ADR/ADR-0001-Systems-Before-Technology.md[m
[36m@@ -1,62 +1,185 @@[m
[31m-﻿# ADR-0001[m
[31m-[m
[31m-## Title[m
[31m-[m
[31m-Systems Before Technology[m
[32m+[m[32m﻿# ADR-0001 — Systems Before Technology[m
 [m
 ## Status[m
 [m
 Accepted[m
 [m
[31m-## Owner[m
[31m-[m
[31m-ARC[m
[32m+[m[32m---[m
 [m
 ## Context[m
 [m
[31m-Many software projects begin with technology choices before understanding the underlying problem.[m
[32m+[m[32mMany software projects begin with technology choices before understanding the underlying system.[m
[32m+[m
[32m+[m[32mThis creates solutions that optimise implementation before understanding reality.[m
[32m+[m
[32m+[m[32mCommon outcomes include:[m
[32m+[m
[32m+[m[32m- Unnecessary complexity[m
[32m+[m[32m- Poor alignment between systems and users[m
[32m+[m[32m- Hidden dependencies[m
[32m+[m[32m- Expensive redesign[m
[32m+[m[32m- Technology choices based on assumptions rather than evidence[m
[32m+[m
[32m+[m[32mARC recognises that systems are living networks of relationships.[m
 [m
[31m-This often results in unnecessary complexity, poor alignment with business needs, and expensive redesign.[m
[32m+[m[32mBefore technology is selected, ARC must understand:[m
[32m+[m
[32m+[m[32m- System purpose[m
[32m+[m[32m- User needs[m
[32m+[m[32m- Environmental constraints[m
[32m+[m[32m- Known relationships[m
[32m+[m[32m- Unknown relationship gaps[m
[32m+[m[32m- Feedback mechanisms[m
[32m+[m
[32m+[m[32mReality is the final authority.[m
 [m
 ---[m
 [m
 ## Decision[m
 [m
[31m-ARC will always design systems before selecting technology.[m
[32m+[m[32mARC will design systems before selecting technology.[m
[32m+[m
[32m+[m[32mTechnology is an implementation capability, not the foundation of understanding.[m
[32m+[m
[32m+[m[32mThe relationship order is:[m
[32m+[m
[32m+[m[32mReality[m
[32m+[m
[32m+[m[32m↕[m
[32m+[m
[32m+[m[32mObservation[m
[32m+[m
[32m+[m[32m↕[m
[32m+[m
[32m+[m[32mRelationships[m
[32m+[m
[32m+[m[32m↕[m
[32m+[m
[32m+[m[32mSystem Understanding[m
[32m+[m
[32m+[m[32m↕[m
[32m+[m
[32m+[m[32mArchitecture[m
[32m+[m
[32m+[m[32m↕[m
[32m+[m
[32m+[m[32mTechnology[m
[32m+[m
[32m+[m[32mTechnology must support validated system relationships.[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m## Known Relationships[m
[32m+[m
[32m+[m[32mThe following relationships are understood:[m
[32m+[m
[32m+[m[32mSystem Purpose ↔ Architecture[m
[32m+[m
[32m+[m[32mArchitecture ↔ Technology[m
[32m+[m
[32m+[m[32mTechnology ↔ Implementation[m
[32m+[m
[32m+[m[32mImplementation ↔ Reality Feedback[m
 [m
[31m-Technology is an implementation detail.[m
[32m+[m[32mThese relationships are validated through testing and observation.[m
 [m
[31m-Systems define behaviour.[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m## Unknown Relationship Gaps[m
[32m+[m
[32m+[m[32mARC recognises that not all relationships are immediately visible.[m
[32m+[m
[32m+[m[32mExamples:[m
[32m+[m
[32m+[m[32mSystem Behaviour → ?[m
[32m+[m
[32m+[m[32mUser Experience → ?[m
[32m+[m
[32m+[m[32mTechnology Impact → ?[m
[32m+[m
[32m+[m[32mThese gaps are discovery targets.[m
 [m
[31m-Technology enables behaviour.[m
[32m+[m[32mUnknown relationships must be investigated before major decisions are locked.[m
 [m
 ---[m
 [m
 ## Alternatives Considered[m
 [m
[31m-Technology-first development.[m
[32m+[m[32m### Technology-first development[m
[32m+[m
[32m+[m[32mRejected.[m
[32m+[m
[32m+[m[32mReason:[m
[32m+[m
[32m+[m[32mTechnology choices may create solutions before the actual system problem is understood.[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m### Feature-first development[m
[32m+[m
[32m+[m[32mRejected.[m
[32m+[m
[32m+[m[32mReason:[m
 [m
[31m-Feature-first development.[m
[32m+[m[32mFeatures without system relationships create isolated capabilities.[m
 [m
[31m-Tool-driven architecture.[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m### Tool-driven architecture[m
[32m+[m
[32m+[m[32mRejected.[m
[32m+[m
[32m+[m[32mReason:[m
 [m
[31m-These approaches were rejected because they optimise implementation before understanding reality.[m
[32m+[m[32mTools should serve architecture, not define it.[m
 [m
 ---[m
 [m
 ## Consequences[m
 [m
[31m-Positive[m
[32m+[m[32m### Positive[m
 [m
[31m-- Better long-term architecture[m
[32m+[m[32m- Stronger long-term architecture[m
 - Reduced technical debt[m
[31m-- Technology independence[m
[31m-- Better client outcomes[m
[32m+[m[32m- Better technology alignment[m
[32m+[m[32m- Clearer system relationships[m
[32m+[m[32m- Improved adaptability[m
[32m+[m[32m- Greater discovery capability[m
 [m
[31m-Negative[m
[32m+[m[32m### Negative[m
 [m
 - Longer discovery phase[m
[31m-- Greater upfront design effort[m
[32m+[m[32m- Increased upfront analysis[m
[32m+[m[32m- Requires continuous learning[m
[32m+[m[32m- May reveal unknown complexity earlier[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m## Reality Feedback[m
[32m+[m
[32m+[m[32mThis decision is validated through:[m
[32m+[m
[32m+[m[32m- User outcomes[m
[32m+[m[32m- System performance[m
[32m+[m[32m- Implementation feedback[m
[32m+[m[32m- New relationship discoveries[m
[32m+[m[32m- Reduction of unnecessary complexity[m
[32m+[m
[32m+[m[32mIf reality contradicts assumptions, architecture must adapt.[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m## Evolution Path[m
[32m+[m
[32m+[m[32mThis ADR evolves as ARC discovers new relationships between:[m
[32m+[m
[32m+[m[32m- People[m
[32m+[m[32m- Systems[m
[32m+[m[32m- Technology[m
[32m+[m[32m- Knowledge[m
[32m+[m[32m- Reality[m
[32m+[m
[32m+[m[32mFuture evidence may improve or change this decision.[m
 [m
 ---[m
 [m
[36m@@ -74,4 +197,4 @@[m [mEngineering Standards[m
 [m
 ## Review Date[m
 [m
[31m-2030-01-01[m
[32m+[m[32m2030-01-01[m
\ No newline at end of file[m
