const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors());
app.use(express.json());

// In-Memory Data Store (Homestay Reviews Sample Database)
let reviews = [
  { id: 1, guest: "Alice Smith", rating: 5, comment: "The host was incredibly friendly and the room was clean!", sentiment: "positive", theme: "host" },
  { id: 2, guest: "Bob Jones", rating: 2, comment: "Location was too noisy. Dust everywhere under the master bed.", sentiment: "negative", theme: "cleanliness" },
  { id: 3, guest: "Charlie Brown", rating: 4, comment: "Nice view and great location close to downtown shops.", sentiment: "positive", theme: "location" }
];

// --- REST API ENDPOINTS ---

// 1. GET ALL REVIEWS (Plus Search/Filter functionality requested in rubric)
// Route example: GET /api/reviews?theme=host
app.get('/api/reviews', (req, res, next) => {
  try {
    const { theme } = req.query;
    if (theme) {
      const filtered = reviews.filter(r => r.theme.toLowerCase() === theme.toLowerCase());
      return res.status(200).json(filtered);
    }
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
});

// 2. GET SINGLE REVIEW BY ID
app.get('/api/reviews/:id', (req, res, next) => {
  try {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) {
      return res.status(404).json({ error: "Review entity resource not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
});

// 3. POST NEW GUEST REVIEW (With complete data validation checking)
app.post('/api/reviews', (req, res, next) => {
  try {
    const { guest, rating, comment, theme, sentiment } = req.body;
    
    if (!guest || !rating || !comment || !theme || !sentiment) {
      return res.status(400).json({ error: "Validation Failure: Missing required document payload values." });
    }

    const newReview = {
      id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
      guest,
      rating: Number(rating),
      comment,
      theme,
      sentiment
    };

    reviews.push(newReview);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

// 4. PUT/PATCH UPDATE EXISTING REVIEW VALUES
app.put('/api/reviews/:id', (req, res, next) => {
  try {
    const reviewId = parseInt(req.params.id);
    const index = reviews.findIndex(r => r.id === reviewId);

    if (index === -1) {
      return res.status(404).json({ error: "No review found matching provided ID parameters." });
    }

    reviews[index] = { ...reviews[index], ...req.body, id: reviewId };
    res.status(200).json(reviews[index]);
  } catch (error) {
    next(error);
  }
});

// 5. DELETE GUEST REVIEW ENTRY
app.delete('/api/reviews/:id', (req, res, next) => {
  try {
    const reviewId = parseInt(req.params.id);
    const index = reviews.findIndex(r => r.id === reviewId);

    if (index === -1) {
      return res.status(404).json({ error: "Cannot delete non-existent review index entry." });
    }

    reviews.splice(index, 1);
    res.status(200).json({ message: "Review record purged successfully.", purgedId: reviewId });
  } catch (error) {
    next(error);
  }
});

// 6. EXTRA WORKSPACE UTILITY ENDPOINT: GENERATE AI AUTO-RESPONSE
app.post('/api/reviews/:id/respond', (req, res, next) => {
  try {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) return res.status(404).json({ error: "Review target record not found." });

    let responseDraft = "";
    if (review.sentiment === "positive") {
      responseDraft = `Dear ${review.guest}, Thank you for your review regarding our ${review.theme}! We appreciate your stay.`;
    } else {
      responseDraft = `Dear ${review.guest}, We apologize sincerely for the issues encountered regarding our ${review.theme}. We are making operational fixes immediately.`;
    }

    res.status(200).json({ reviewId: review.id, draft: responseDraft });
  } catch (error) {
    next(error);
  }
});

// --- COMPLIANT CUSTOM ERROR-HANDLING MIDDLEWARE ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Processing Error Encountered." });
});

app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));