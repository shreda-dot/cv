import React from 'react'

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            author: 'Maya R.',
            title: 'Excellent experience',
            rating: 5,
            comment: 'just an example of my friend picture, i used an array instead of fetching from an api',
            avatar: 'https://i.pravatar.cc/48?img=12'
        },
        {
            id: 2,
            author: 'Liam S.',
            title: 'Good, with minor issues',
            rating: 4,
            comment: 'just an example of my friend picture, i used an array instead of fetching from an api',
            avatar: 'https://i.pravatar.cc/48?img=5'
        },
        {
            id: 3,
            author: 'Ava T.',
            title: 'Not what I expected',
            rating: 3,
            comment: 'just an example of my friend picture, i used an array instead of fetching from an api',
            avatar: 'https://i.pravatar.cc/48?img=33'
        },
        {
            id: 4,
            author: 'Noah K.',
            title: 'Fantastic support',
            rating: 5,
            comment: 'just an example of my friend picture, i used an array instead of fetching from an api',
            avatar: 'https://i.pravatar.cc/48?img=8'
        },
        {
            id: 5,
            author: 'Sophia L.',
            title: 'Would recommend',
            rating: 4,
            comment: 'just an example of my friend picture, i used an array instead of fetching from an api',
            avatar: 'https://i.pravatar.cc/48?img=44'
        }
    ];
return (
    <div className="reviews">
        <style>{`
            .reviews-grid{
                display: grid;
                gap: 16px;
                grid-template-columns: 1fr;
            }
            @media (min-width: 640px) {
                .reviews-grid{ grid-template-columns: repeat(2, 1fr); }
            }
            @media (min-width: 1024px) {
                .reviews-grid{ grid-template-columns: repeat(3, 1fr); }
            }
            .review-card{
                border: 1px solid #eee;
                padding: 12px;
                border-radius: 8px;
                background: #fff;
                display: flex;
                flex-direction: column;
                gap: 8px;
                height: 100%;
            }
            .review-row{
                display: flex;
                gap: 12px;
                align-items: flex-start;
            }
            .avatar{
                width: 48px;
                height: 48px;
                border-radius: 8px;
                flex-shrink: 0;
                object-fit: cover;
            }
            .meta{
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                gap: 12px;
            }
            .rating { margin-top: 6px; }
            .star-empty { color: #e5e7eb; }
            .star-filled { color: #f59e0b; }
            .review-comment { margin-top: 6px; color: #111827; }
        `}</style>

        <div className="reviews-grid">
            {reviews.map((r) => (
                <article key={r.id} className="review-card" aria-labelledby={`rev-${r.id}-title`}>
                    <div className="review-row">
                        <img src={r.avatar} alt={`${r.author} avatar`} className="avatar" />
                        <div style={{ flex: 1 }}>
                            <div className="meta">
                                <div>
                                    <div id={`rev-${r.id}-title`} style={{ fontWeight: 600 }}>{r.author}</div>
                                    <div style={{ color: '#374151' }}>{r.title}</div>
                                </div>
                                
                            </div>

                            <div className="rating" aria-hidden>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={i < r.rating ? 'star-filled' : 'star-empty'}>★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="review-comment">{r.comment}</p>
                </article>
            ))}
        </div>
    </div>
)
}

export default Reviews
