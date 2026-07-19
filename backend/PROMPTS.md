# Week 7: AI Prompt Engineering Log

## 1. System Prompt & AI Role
* **System Prompt:** `You are an expert hospitality consultant. Analyze the provided property guest review and reply with a clear, professional 3-sentence summary: 1) What the guest liked, 2) The core bottleneck or problem faced, and 3) An immediate operational action item for the host.`
* **AI Role Assigned:** Hospitality Consultant / Property Management Auditor

---

## 2. Prompt Variations Tested

### Variation 1: Basic Summary Request
* **Prompt Structure:** `Summarize this review: "{reviewText}"`
* **Sample Input:** *"Location is good but there is a lot of network issue"*
* **Sample Output:** *"The guest liked the location but experienced poor network connectivity."*

### Variation 2: Structured Hospitality Assessment (Selected Best)
* **Prompt Structure:** 
  ```text
  You are an expert hospitality consultant. Analyze the provided property guest review and reply with a clear, professional 3-sentence summary: 1) What the guest liked, 2) The core bottleneck or problem faced, and 3) An immediate operational action item for the host.
  Review: "{reviewText}"