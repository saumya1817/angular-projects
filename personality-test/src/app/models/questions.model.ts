interface Question {
    text: string;
    options: { text: string; trait: string }[];
}
  
export const questions: Question[] = [
    {
      text: 'Which color best represents your personality?',
      options: [
        { text: 'Blue – calm and collected', trait: 'empathetic' },
        { text: 'Yellow – bright and cheerful', trait: 'creative' },
        { text: 'Red – bold and passionate', trait: 'adventurous' },
        { text: 'Green – grounded and balanced', trait: 'analytical' },
      ],
    },
    {
      text: 'How do you handle stress?',
      options: [
        { text: 'Take a break and relax', trait: 'creative' },
        { text: 'Make a to-do list and tackle it', trait: 'analytical' },
        { text: 'Go for a walk or do something active', trait: 'adventurous' },
        { text: 'Talk it out with someone', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your ideal vacation?',
      options: [
        { text: 'A cozy cabin in the mountains', trait: 'empathetic' },
        { text: 'A bustling city tour', trait: 'analytical' },
        { text: 'A tropical beach paradise', trait: 'adventurous' },
        { text: 'A spontaneous road trip', trait: 'creative' },
      ],
    },
    {
      text: 'If you were a superhero, what would your power be?',
      options: [
        { text: 'Flying', trait: 'creative' },
        { text: 'Super strength', trait: 'adventurous' },
        { text: 'Reading minds', trait: 'empathetic' },
        { text: 'Time travel', trait: 'analytical' },
      ],
    },
    {
      text: 'What’s your approach to solving a problem?',
      options: [
        { text: 'Brainstorm creative solutions', trait: 'creative' },
        { text: 'Break it into smaller tasks', trait: 'analytical' },
        { text: 'Rely on instinct', trait: 'adventurous' },
        { text: 'Ask others for their input', trait: 'empathetic' },
      ],
    },
    {
      text: 'What do you enjoy most at parties?',
      options: [
        { text: 'Meeting new people', trait: 'adventurous' },
        { text: 'Organizing and hosting', trait: 'analytical' },
        { text: 'Dancing and having fun', trait: 'creative' },
        { text: 'Observing and people-watching', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your dream job?',
      options: [
        { text: 'Artist or musician', trait: 'creative' },
        { text: 'CEO or entrepreneur', trait: 'analytical' },
        { text: 'Teacher or counselor', trait: 'empathetic' },
        { text: 'Scientist or researcher', trait: 'adventurous' },
      ],
    },
    {
      text: 'What motivates you the most?',
      options: [
        { text: 'Helping others', trait: 'empathetic' },
        { text: 'Achieving goals', trait: 'analytical' },
        { text: 'Trying new things', trait: 'adventurous' },
        { text: 'Building strong relationships', trait: 'creative' },
      ],
    },
    {
      text: 'How do you usually spend your weekends?',
      options: [
        { text: 'Binge-watching your favorite shows', trait: 'creative' },
        { text: 'Running errands and planning', trait: 'analytical' },
        { text: 'Exploring new places', trait: 'adventurous' },
        { text: 'Hanging out with friends or family', trait: 'empathetic' },
      ],
    },
    {
      text: 'If you could live anywhere, where would it be?',
      options: [
        { text: 'A quiet countryside', trait: 'empathetic' },
        { text: 'A big bustling city', trait: 'analytical' },
        { text: 'A tropical island', trait: 'adventurous' },
        { text: 'A cozy small town', trait: 'creative' },
      ],
    },
    {
      text: 'What’s your communication style?',
      options: [
        { text: 'Straightforward and to the point', trait: 'creative' },
        { text: 'Thoughtful and detailed', trait: 'analytical' },
        { text: 'Casual and lighthearted', trait: 'adventurous' },
        { text: 'Warm and empathetic', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your favorite type of book?',
      options: [
        { text: 'Fantasy or adventure', trait: 'creative' },
        { text: 'Self-help or productivity', trait: 'analytical' },
        { text: 'Mystery or thriller', trait: 'adventurous' },
        { text: 'Romance or drama', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your go-to comfort food?',
      options: [
        { text: 'Pizza', trait: 'creative' },
        { text: 'Chocolate', trait: 'empathetic' },
        { text: 'Ice cream', trait: 'adventurous' },
        { text: 'French fries', trait: 'analytical' },
      ],
    },
    {
      text: 'How do you usually celebrate your achievements?',
      options: [
        { text: 'Treat yourself to something nice', trait: 'empathetic' },
        { text: 'Plan your next goal', trait: 'analytical' },
        { text: 'Share the news with friends', trait: 'adventurous' },
        { text: 'Reflect quietly on your success', trait: 'creative' },
      ],
    },
    {
      text: 'What’s your favorite time of day?',
      options: [
        { text: 'Morning – full of possibilities', trait: 'creative' },
        { text: 'Afternoon – productive and active', trait: 'analytical' },
        { text: 'Evening – relaxed and peaceful', trait: 'empathetic' },
        { text: 'Night – creative and reflective', trait: 'adventurous' },
      ],
    },
    {
      text: 'If you were a type of weather, what would you be?',
      options: [
        { text: 'Sunny and warm', trait: 'empathetic' },
        { text: 'Cool and breezy', trait: 'creative' },
        { text: 'Stormy and intense', trait: 'adventurous' },
        { text: 'Calm and rainy', trait: 'analytical' },
      ],
    },
    {
      text: 'How do you like to learn?',
      options: [
        { text: 'Hands-on and interactive', trait: 'adventurous' },
        { text: 'By reading or researching', trait: 'analytical' },
        { text: 'By asking questions', trait: 'empathetic' },
        { text: 'By trial and error', trait: 'creative' },
      ],
    },
    {
      text: 'What’s your spirit animal?',
      options: [
        { text: 'Dolphin – playful and intelligent', trait: 'creative' },
        { text: 'Lion – brave and confident', trait: 'adventurous' },
        { text: 'Owl – wise and thoughtful', trait: 'analytical' },
        { text: 'Dog – loyal and friendly', trait: 'empathetic' },
      ],
    },
    {
      text: 'How do you spend time during a rainy day?',
      options: [
        { text: 'Curl up with a book or movie', trait: 'empathetic' },
        { text: 'Tackle indoor projects', trait: 'analytical' },
        { text: 'Dance in the rain!', trait: 'adventurous' },
        { text: 'Call a friend and chat for hours', trait: 'creative' },
      ],
    },
    {
      text: 'What’s your favorite type of music?',
      options: [
        { text: 'Pop – upbeat and catchy', trait: 'creative' },
        { text: 'Classical – structured and calming', trait: 'analytical' },
        { text: 'Rock – bold and energetic', trait: 'adventurous' },
        { text: 'Jazz – smooth and soulful', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your ideal way to relax?',
      options: [
        { text: 'Meditation or yoga', trait: 'empathetic' },
        { text: 'Organizing and decluttering', trait: 'analytical' },
        { text: 'Trying a new hobby', trait: 'adventurous' },
        { text: 'Spending quality time with loved ones', trait: 'creative' },
      ],
    },
    {
      text: 'How do you prepare for a trip?',
      options: [
        { text: 'Research every detail and make an itinerary', trait: 'analytical' },
        { text: 'Pack the essentials and go with the flow', trait: 'adventurous' },
        { text: 'Plan some activities but leave room for surprises', trait: 'creative' },
        { text: 'Let someone else plan it for you', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your biggest strength?',
      options: [
        { text: 'Creativity', trait: 'creative' },
        { text: 'Discipline', trait: 'analytical' },
        { text: 'Adaptability', trait: 'adventurous' },
        { text: 'Empathy', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your favorite social media platform?',
      options: [
        { text: 'Instagram – visual and creative', trait: 'creative' },
        { text: 'LinkedIn – professional and goal-oriented', trait: 'analytical' },
        { text: 'TikTok – fun and trendy', trait: 'adventurous' },
        { text: 'Facebook – connected and familiar', trait: 'empathetic' },
      ],
    },
    {
      text: 'What’s your ideal way to relax?',
      options: [
        { text: 'Meditation or yoga', trait: 'empathetic' },
        { text: 'Organizing and decluttering', trait: 'analytical' },
        { text: 'Trying a new hobby', trait: 'adventurous' },
        { text: 'Spending quality time with loved ones', trait: 'creative' },
      ],
    },
  ];