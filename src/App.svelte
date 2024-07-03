<!-- App.svelte -->
<script lang="ts">
  import Header from './components/Header.svelte';
  import Bio from './components/Bio.svelte';
  import ProjectList from './components/ProjectList.svelte';
  import ComicFetcher from './components/ComicFetcher.svelte';
  import './global.css';

  const headerLinks = [
    { href: "https://t.me/yapii7", icon: "/img/Telegram_i.png" },
    { href: "https://github.com/yasmin964?tab=repositories", icon: "/img/GitHub.png" },
    { href: "mailto:kalgexavva1970@icloud.com", icon: "/img/email.png" }
  ];

  const headerContent = [
    { href: 'aboutme.html', text: 'Home' },
    { href: 'https://www.instagram.com/iasmin_na?igsh=MWJseWYyb3ZiMjd5dw==', text: 'Blog' },
    { href: 'https://github.com/yasmin964?tab=repositories', text: 'My Projects' },

  ];

  const bio = {
    name: "Yasmina Mamadalieva",
    description: `My name is Yasmina Mamadalieva. I'm an 18-year-old aspiring programmer with a deep passion for technology and a curiosity for knowledge. My interests span a broad spectrum, from philosophy, religion, and art to data structures and algorithms. I began my journey in IT during high school, and while my portfolio isn't extensive yet, I am committed to having my skills and expanding my expertise. I am a hardworking individual, and I firmly believe that the best is yet to come. With dedication and perseverance, I am excited to see what the future holds for my career in programming.`
  };

  const projects = [
    {
      title: "University Courses Management System",
      description: "An IT university desires to develop a course management system. Courses have fixed capacities and students can only be enrolled in a limited number of courses if their capacity allows for it. The work is done in the Java language."
    },
    {
      title: "FSA-to-RegExp-Translator",
      description: "Implement an FSA to RegExp Translator. Given an FSA description in the input.txt your program should output to console an error description OR a regular expression that corresponds to the given FSA. The work is done in the Java language."
    },
    {
      title: "Shortest network paths",
      description: "The graph of a computer network where each edge has a length in meters and bandwidth. Implement a program using AdjacencyMatrixGraph to compute the shortest path from host (A) to host (B) with a requirement of minimum bandwidth (W). You need to use Dijkstra's algorithm to solve this."
    }
  ];
</script>

<Header {headerLinks} {headerContent} />
<Bio {bio} />
<ProjectList {projects} />
<ComicFetcher />
