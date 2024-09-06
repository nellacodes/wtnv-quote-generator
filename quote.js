var quotes = [
    'You too have survived, survived everything up to this moment. - ep.15',
    'The past is gone, and cannot harm you anymore. And while the future is fast coming for you, it always flinches first and settles in as the gentle present. This now, this us? We can cope with that. We can do this together. You and I, drowsily, but comfortably. - ep.12',
    'Are we living a life that is safe from harm? Of course not. We never are. But that’s not the right question. The question is are we living a life that is worth the harm? - ep-46',
    'Believe in yourself. You are an ancient, absent god, discussed only rarely by literary scholars. - tweet from 2013',
    'Be proud of your place in the Cosmos. It is small and yet it is. - ep.x',
    'Death is only the end if you assume the story is about you. - ep.x',
    'There is a thin semantic line separating weird and beautiful, and that line is covered in jellyfish. - ep.22',
    'Confused? At a loss for what to do? Wow sounds like you’re human. Good Luck. - ep.x',
    'The universe is vast. You are also vast. So is an ant. There are different sizes of infinity. - ep.x',
    'Within our limitations, there is no limit to how beautiful we can become. - ep.x',
    'We are not history yet. We are happening now. How miraculous is that? - ep.x',
    'We are each made of space debris, exploding outward from the center of all history - tweet from 2013',
    'You are beautiful only when you do beautiful things. Full lips aren’t as beautiful as a full laugh. Skinny hips aren’t as attractive as a quick wit. - ep. 27',
    'If you could only see the word as it really is! It is beautiful and on fire and awful. - tweet from 2013',
    'Stars! They’re just like us... Fixed points of light against the void, arranged in contrived constellations of long-dead gods! - ep.x',
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber]; 
  }