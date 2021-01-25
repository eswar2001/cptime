import React from 'react'

import './syllabus.css'
export const Syllabus = () => {
    return (<div className="container">
        <h1 id="competitive-programming-syllabus">Competitive Programming Syllabus</h1>
        <br /><br />
        <h2 id="geometry">Geometry</h2>
        <ul>
            <li>Graham Scan algorithm for Convex Hull O(n * log(n))</li>
            <li>Online construction of 3-D convex hull in O(n^2)</li>
            <li>Bentley Ottmann algorithm to list all intersection points of n line segments in O((n + I) * logn)<ul>
                <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://softsurfer.com/Archive/algorithm_0108/algorithm_0108.htm">Link</a></li>
            </ul>
            </li>
            <li>Rotating Calipers Technique<ul>
                <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://cgm.cs.mcgill.ca/~orm/rotcal.html">http://cgm.cs.mcgill.ca/~orm/rotcal.html</a></li>
                <li>Problems - Refer the article for a list of problems which can be solved using Rotating Calipers technique.</li>
            </ul>
            </li>
            <li>Line Sweep/Plane Sweep algorithms</li>
            <li>Area/Perimeter of Union of Rectangles.</li>
            <li>Closest pair of points.<ul>
                <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=lineSweep">Link</a></li>
                <li>Problems - Follow the tutorial for list of problems.</li>
            </ul>
            </li>
            <li>Area of Union of Circles.</li>
            <li>Delaunay Triangulation of n points in O(n * logn).</li>
            <li>Voronoi Diagrams of n points in O(n * logn) using Fortune’s algorithm.</li>
            <li>Point in a polygon problem -<ul>
                <li>O(n) solution without preprocessing.</li>
                <li>O(logn) algorithm with O(n * logn) preprocessing for convex polygons.</li>
            </ul>
            </li>
            <li>Problems on computational geometry -<ul>
                <li>BSHEEP, BULK, SEGVIS, CONDUIT, RUNAWAY, DIRVS, RAIN1, SHAMAN, TCUTTER, LITEPIPE, RHOMBS, FSHEEP,
                FLBRKLIN, CERC07P, BAC, ALTARS, CERC07C, NECKLACE, CH3D, RECTANGL, POLYSSQ, FOREST2, KPPOLY,
                RAIN2, SEGMENTS, ARCHPLG, BALLOON, CIRCLES, COMPASS, EOWAMRT, ICERINK on SPOJ.</li>
                <li>CultureGrowth, PolygonCover on Topcoder.</li>
            </ul>
            </li>
            <li>Suggested Reading - Computational Geometry: Algorithms and applications. Mark De Burg.</li>
        </ul>
        <h2 id="string-algorithms">String Algorithms</h2>
        <h3 id="substring-search">Substring search</h3>
        <ul>
            <li>KnuthMorrisPratt algorithm (Problems - NHAY, PERIOD on SPOJ)</li>
            <li>Suggested Reading - Cormen chapter on Strings.</li>
            <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=stringSearching">topcoder Link</a></li>
            <li>Aho Corasick algorithm</li>
            <li>Problems - WPUZZLES on SPOJ</li>
        </ul>
        <h3 id="suffix-arrays">Suffix Arrays</h3>
        <ul>
            <li>O(n^2 * logn) Naive method of suffix array construction</li>
            <li>O(n * logn^2) method of suffix array construction</li>
            <li>O(n * logn) method of suffix array construction</li>
            <li>O(n) method of suffix array construction</li>
            <li>O(n) LCA preprocess on Suffix Arrays to solve a variety of string problems</li>
        </ul>
        <h3 id="suffix-trees">Suffix Trees</h3>
        <ul>
            <li>O(n) construction of Suffix trees using Ukkonon’s algorithm</li>
            <li>O(n) construction of Suffix Trees if provided with Suffix Arrays using Farach&#39;s algorithm</li>
        </ul>
        <h3 id="other">Other</h3>
        <ul>
            <li>Suffix Automata - O(n) Suffix Automaton construction.</li>
            <li>Dictionary Of Basic Factors - O(n * logn) method of DBF construction using Radix Sort.</li>
            <li>Manacher’s algorithm to find length of palindromic substring of a string centered at a position for each position in the string.
Runtime -&gt; O(n).</li>
            <li>Searching and preprocessing Regular Expressions consisting of &#39;?&#39; and &#39;*&#39;</li>
        </ul>
        <h3 id="multi-dimensional-pattern-matching">Multi-dimensional pattern matching</h3>
        <ul>
            <li>DISUBSTR, PLD, MSTRING, REPEATS, JEWELS, ARCHIVER, PROPKEY, LITELANG, EMOTICON, WORDS, AMCODES, UCODES, PT07H, MINSEQ, TOPALIN, BWHEELER, BEADS, SARRAY, LCS, LCS2, SUBST1, PHRASES, PRETILE on SPOJ</li>
            <li><a target="_blank" rel="noreferrer" href="http://www.algorithmist.com/index.php/Category:String_algorithms">algorithmist Link</a></li>
        </ul>
        <h2 id="graphs">Graphs</h2>
        <h3 id="basic-graphs">Basic Graphs</h3>
        <ul>
            <li>Representation of graphs as adjacency list, adjacency matrix, incidence matrix and edge list and uses of different representations in different scenarios</li>
            <li>Breadth First Search (Problems - PPATH, ONEZERO, WATER on SPOJ)</li>
            <li>Depth First Search</li>
            <li>Strongly Connected Components (TOUR and BOTTOM on SPOJ)</li>
            <li>Biconnected Components, Finding articulation points and bridges (RELINETS, PT07A on SPOJ)</li>
            <li>Dijkstra algorithm (SHPATH on SPOJ)</li>
            <li>Floyd Warshall algorithm (COURIER on SPOJ)</li>
            <li>Minimum Spanning Tree (BLINNET on SPOJ)</li>
            <li>Flood-fill algorithm</li>
            <li>Topological sort</li>
            <li>Bellman-Ford algorithm.</li>
            <li>Euler Tour/Path (WORDS1 on SPOJ)</li>
            <li>Suggested reading for most of the topics in Graph algorithms -
<a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=graphsDataStrucs1">topcoder Link</a>.</li>
            <li>Also refer to the tutorial for problems concerning these techniques.</li>
            <li>Cormen chapter 22 to 24.</li>
        </ul>
        <h3 id="flow-networks-matching">Flow networks/ matching</h3>
        <ul>
            <li>Maximum flow using Ford Fulkerson Method<ul>
                <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=maxFlow">topcoderd1=tutorials&amp;d2=maxFlow</a></li>
                <li>problems - TAXI, POTHOLE, IM, QUEST4, MUDDY, EN, CABLETV, STEAD, NETADMIN, COCONUTS, OPTM on SPOJ.</li>
            </ul>
            </li>
            <li>Maximum flow using Dinic’s Algorithm (PROFIT on spoj)</li>
            <li>Minimum Cost Maximum Flow.</li>
            <li>Successive Shortest path algorithm.</li>
            <li>Cycle Cancelling algorithm - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=minimumCostFlow1">topcoderd1=tutorials&amp;d2=minimumCostFlow1</a></li>
            <li>Maximum weighted Bipartite Matching (Kuhn Munkras algorithm/ Hungarian Method)<ul>
                <li>problems - GREED, SCITIES, TOURS on SPOJ | <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8143">topcoderpm=8143</a></li>
            </ul>
            </li>
            <li>Stoer Wagner min-cut algorithm.</li>
            <li>Hopcroft Karp bipartite matching algorithm (ANGELS on SPOJ)</li>
            <li>Maximum matching in general graph (blossom shrinking)</li>
            <li>Gomory-Hu Trees (MCQUERY on Spoj)</li>
            <li>Chinese Postman Problem<ul>
                <li>problems - <a target="_blank" rel="noreferrer" href="http://acm.uva.es/archive/nuevoportal/data/problem.php?p=4039">http://acm.uva.es/archive/nuevoportal/data/problem.php?p=4039</a></li>
                <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://eie507.eie.polyu.edu.hk/ss-submission/B7a/">http://eie507.eie.polyu.edu.hk/ss-submission/B7a/</a></li>
            </ul>
            </li>
            <li>Suggested Reading for the full category -&gt;</li>
            <li>Network flow - Algorithms and Applications by Ahuja</li>
            <li>Cormen book chapter 25.</li>
        </ul>
        <h2 id="dynamic-programming-">Dynamic Programming.</h2>
        <ul>
            <li>Suggested Reading - Dynamic Programming(DP) as a tabulation method</li>
            <li>Cormen chapter on DP</li>
            <li>Standard problems (you should really feel comfortable with these types)<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8570&amp;rd=12012&amp;rm=269199&amp;cr=7581406">topcoder</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10765&amp;rd=14183">topcoderpm=10765&amp;rd=14183</a></li>
            </ul>
            </li>
            <li>State space reduction<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10902">topcoderpm=10902</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=3001">topcoderpm=3001</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8605&amp;rd=12012&amp;rm=269199&amp;cr=7581406">topcoder Link</a></li>
            </ul>
            </li>
            <li>Solving in the reverse - easier characterizations looking from the end<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/MUSKET">spoj.pl/problems/MUSKET</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=5908">topcoderpm=5908</a></li>
            </ul>
            </li>
            <li>Counting/optimizing arrangements satisfying some specified properties<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8306">topcoderpm=8306</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=784">topcoderpm=784</a></li>
            </ul>
            </li>
            <li>Strategies and expected values<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10765&amp;rd=14183">topcoderpm=10765&amp;rd=14183</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10806">topcoderpm=10806</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=7828">topcoderpm=7828</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=7316">topcoderpm=7316</a></li>
            </ul>
            </li>
            <li>DP on probability spaces<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=7422">topcoderpm=7422</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=2959">topcoderpm=2959</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10335">topcoderpm=10335</a></li>
            </ul>
            </li>
            <li>DP on trees<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10800">topcoderpm=10800</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10737">topcoderpm=10737</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_solution&amp;rm=266678&amp;rd=10958&amp;pm=8266&amp;cr=7581406">www.topcoder.com</a></li>
                <li>DP with data structures</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/INCSEQ/">spoj.pl/problems/INCSEQ/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/INCDSEQ/">spoj.pl/problems/INCDSEQ/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/LIS2/">spoj.pl/problems/LIS2/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=1986">topcoderpm=1986</a></li>
            </ul>
            </li>
            <li>Symmetric characterization of DP state<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8610">topcoderpm=8610</a></li>
            </ul>
            </li>
            <li>A good collection of problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://codeforces.com/blog/entry/325">http://codeforces.com/blog/entry/325</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://problemclassifier.appspot.com/index.jsp?search=dp">http://problemclassifier.appspot.com/index.jsp?search=dp</a></li>
            </ul>
            </li>
        </ul>
        <h2 id="greedy">Greedy</h2>
        <ul>
            <li>Chapter on Greedy algorithms in Cormen</li>
            <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=greedyAlg">topcoder greedyAlg</a></li>
            <li>Problems - refer to the topcoder tutorial.</li>
        </ul>
        <h2 id="number-theory">Number Theory</h2>
        <h3 id="modulus-arithmetic">Modulus arithmetic</h3>
        <ul>
            <li>Basic postulates (Including modular linear equations, Continued fraction and Pell&#39;s equation)</li>
            <li>Suggested Reading -<ul>
                <li>Chapter 1 from Number Theory for Computing by SY Yan (Recommended)</li>
                <li>31.1, 31.3 and 31.4 from Cormen</li>
                <li>www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=primeNumbers</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://projecteuler.net/index.php?section=problems&amp;id=64">projecteuler 64</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://projecteuler.net/index.php?section=problems&amp;id=65">projecteuler 65</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://projecteuler.net/index.php?section=problems&amp;id=66">projecteuler 66</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=6408&amp;rd=9826">topcoder 9826</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=2342">topcoder 2342</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="fermat-s-theorem-euler-totient-theorem-totient-function-order-primitive-roots-">Fermat&#39;s theorem, Euler Totient theorem (totient function, order, primitive roots)</h3>
        <ul>
            <li>Suggested Reading<ul>
                <li>1.6, 2.2 from Number Theory by SY Yan</li>
                <li>31.6 , 31.7 from Cormen</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://projecteuler.net/index.php?section=problems&amp;id=70">http://projecteuler.net/index.php?section=problems&amp;id=70</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/NDIVPHI/">spoj.pl/problems/NDIVPHI/</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="chinese-remainder-theorem">Chinese remainder theorem</h3>
        <ul>
            <li>Suggested Reading<ul>
                <li>31.5 from Cormen</li>
                <li>1.6 from Number Theory by SY Yan</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li>Project Euler 271</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10551&amp;rd=13903">topcoder</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="primality-tests">Primality tests</h3>
        <ul>
            <li>Deterministic O(sqrt(n)) approach</li>
            <li>Probabilistic primality tests - Fermat primality test, Miller-Rabin Primality test</li>
            <li>Suggested Reading -<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=primalityTesting">topcoderd1=tutorials&amp;d2=primalityTesting</a></li>
                <li>Cormen 31.8</li>
                <li>2.2 from Number Theory by SY Yan</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li>PON, PRIC, SOLSTRAS on SPOJ</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=4515">topcoder</a></li>
            </ul>
            </li>
            <li>Prime generation techniques - Sieve of Erastothenes (PRIME1 on SPOJ)</li>
        </ul>
        <h3 id="gcd-using-euclidean-method">GCD using euclidean method</h3>
        <ul>
            <li>Suggested Reading - 31.2 Cormen</li>
            <li>Problems<ul>
                <li>GCD on SPOJ</li>
                <li><a target="_blank" rel="noreferrer" href="http://uva.onlinejudge.org/external/114/11424.html">http://uva.onlinejudge.org/external/114/11424.html</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="logarithmic-exponentiation">Logarithmic Exponentiation</h3>
        <ul>
            <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=primalityTesting">topcoder</a></li>
        </ul>
        <h3 id="integer-factorization">Integer Factorization</h3>
        <ul>
            <li>Naive O(sqrt(n)) method</li>
            <li>Pollard Rho factorization</li>
            <li>Suggested Reading<ul>
                <li>2.3 from Number Theory SY Yan</li>
                <li>31.9 Cormen</li>
            </ul>
            </li>
            <li>Problems -<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=2986&amp;rd=5862">topcoderpm=2986&amp;rd=5862</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/DIVSUM2/">spoj.pl/problems/DIVSUM2/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=4481&amp;rd=6538">topcoderpm=4481&amp;rd=6538</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="other">Other</h3>
        <ul>
            <li>Stirling numbers</li>
            <li>Wilson theorem</li>
            <li>nCr % p  in O(p) preprocess and O(log n) query</li>
            <li>Lucas Theorem</li>
            <li>Suggested Reading for Number Theory -<ul>
                <li>Number theory for computing by Song Y Yan (Simple book describing concepts in details)</li>
                <li>Concepts are also superficially covered in Chapter 31 of Introduction to Algorithms by Cormen</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.codechef.com/wiki/tutorial-number-theory">codechef.com/wiki/tutorial-number-theory</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.algorithmist.com/index.php/Category:Number_Theory">algorithmist.com/index.php/Category:Number_Theory</a></li>
            </ul>
            </li>
            <li>Problems on Number Theory -<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.algorithmist.com/index.php/Category:Number_Theory">algorithmist.com/index.php/Category:Number_Theory</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://problemclassifier.appspot.com/index.jsp?search=number&amp;usr=">http://problemclassifier.appspot.com/index.jsp?search=number&amp;usr=</a></li>
            </ul>
            </li>
        </ul>
        <h2 id="math-probability-counting-game-theory-group-theory-generating-functions-permutation-cycles-linear-algebra-">Math (Probability, Counting, Game Theory, Group Theory, Generating functions, Permutation Cycles, Linear Algebra)</h2>
        <h3 id="probability">Probability</h3>
        <ul>
            <li>Basic probability and Conditional probability<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/CT16E/">spoj.pl/problems/CT16E/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/CHICAGO/">spoj.pl/problems/CHICAGO/</a></li>
            </ul>
            </li>
            <li>Random variables, probability generating functions</li>
            <li>Mathematical expectation + Linearity of expectation<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/FAVDICE/">spoj.pl/problems/FAVDICE/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10744">topcoderpm=10744</a></li>
            </ul>
            </li>
            <li>Special discrete and continuous probability distributions<ul>
                <li>Bernoulli, Binomial, Poisson, normal distribution</li>
                <li><a target="_blank" rel="noreferrer" href="http://acm.sgu.ru/problem.php?contest=0&amp;problem=498">http://acm.sgu.ru/problem.php?contest=0&amp;problem=498</a></li>
            </ul>
            </li>
            <li>Suggested Readings<ul>
                <li>Cormen appendix C (very basic)</li>
                <li>Topcoder probabilty tutorial <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=probabilities">topcoderd1</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Random_variable">http://en.wikipedia.org/wiki/Random_variable</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Expected_value">http://en.wikipedia.org/wiki/Expected_value</a></li>
                <li>William Feller, An introduction to probability theory and its applications</li>
            </ul>
            </li>
        </ul>
        <h3 id="counting">Counting</h3>
        <ul>
            <li>Basic principles - Pigeon hole principle, addition, multiplication rules</li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://acm.timus.ru/problem.aspx?space=1&amp;num=1690">http://acm.timus.ru/problem.aspx?space=1&amp;num=1690</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10805">topcoderpm=10805</a></li>
            </ul>
            </li>
            <li>Suggested readings<ul>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Combinatorial_principles">http://en.wikipedia.org/wiki/Combinatorial_principles</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=combinatorics">topcoderd1=tutorials&amp;d2=combinatorics</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.maa.org/editorial/knot/pigeonhole.html">maa.org/editorial/knot/pigeonhole.html</a></li>
            </ul>
            </li>
            <li>Inclusion-exclusion<ul>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Inclusion–exclusion_principle">http://en.wikipedia.org/wiki/Inclusion–exclusion_principle</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=4463&amp;rd=6536">topcoderpm=4463&amp;rd=6536</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10238">topcoderpm=10238</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="special-numbers">Special numbers</h3>
        <ul>
            <li>Stirling, eurlerian, harmonic, bernoulli, fibonnacci numbers</li>
            <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Stirling_number">http://en.wikipedia.org/wiki/Stirling_number</a></li>
            <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Eulerian_numbers">http://en.wikipedia.org/wiki/Eulerian_numbers</a></li>
            <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Harmonic_series\_(mathematics">http://en.wikipedia.org/wiki/Harmonic_series\_(mathematics</a>)</li>
            <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Bernoulli_number">http://en.wikipedia.org/wiki/Bernoulli_number</a></li>
            <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Fibonnaci_numbers">http://en.wikipedia.org/wiki/Fibonnaci_numbers</a></li>
            <li>Concrete mathematics by Knuth</li>
            <li>Suggested problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=1643">topcoderpm=1643</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8202&amp;rd=11125">topcoderpm=8202&amp;rd=11125</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8725">topcoderpm=8725</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=2292&amp;rd=10709">topcoderpm=2292&amp;rd=10709</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="advanced-counting-techniques-polya-counting-burnsides-lemma">Advanced counting techniques - Polya counting, burnsides lemma</h3>
        <ul>
            <li>Suggested reading<ul>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Burnside&#39;s_lemma">http://en.wikipedia.org/wiki/Burnside&#39;s_lemma</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://petr-mitrichev.blogspot.com/2008/11/burnsides-lemma.html">http://petr-mitrichev.blogspot.com/2008/11/burnsides-lemma.html</a></li>
            </ul>
            </li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=9975">topcoderpm=9975</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/TRANSP/">spoj.pl/problems/TRANSP/</a></li>
            </ul>
            </li>
        </ul>
        <h2 id="game-theory">Game theory</h2>
        <ul>
            <li>Basic principles and Nim game</li>
            <li>Sprague grundy theorem, grundy numbers</li>
            <li>Suggested readings<ul>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Sprague%E2%80%93Grundy_theorem">Grundy_theorem</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=algorithmGames">algorithm Games topcoder</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.ams.org/samplings/feature-column/fcarc-games1">ams.org/samplings/feature-column/fcarc-games1</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.codechef.com/wiki/tutorial-game-theory">codechef.com/wiki/tutorial-game-theory</a></li>
            </ul>
            </li>
            <li>Suggested problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=3491&amp;rd=6517">topcoderpm=3491&amp;rd=6517</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=3491&amp;rd=6517">topcoderpm=3491&amp;rd=6517</a></li>
            </ul>
            </li>
            <li>Hackenbush<ul>
                <li><a target="_blank" rel="noreferrer" href="http://en.wikipedia.org/wiki/Hackenbush">http://en.wikipedia.org/wiki/Hackenbush</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.ams.org/samplings/feature-column/fcarc-partizan1">ams.org/samplings/feature-column/fcarc-partizan1</a></li>
            </ul>
            </li>
            <li>Suggested problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.cs.caltech.edu/ipsc/problems/g.html">cs.caltech.edu/ipsc/problems/g.html</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/PT07A/">spoj.pl/problems/PT07A/</a></li>
            </ul>
            </li>
        </ul>
        <h2 id="linear-algebra">Linear Algebra</h2>
        <h3 id="matrix-operations">Matrix Operations</h3>
        <ul>
            <li>Addition and subtraction of matrices<ul>
                <li>Cormen 28.1</li>
            </ul>
            </li>
            <li>Multiplication (Strassen&#39;s algorithm), logarithmic exponentiation<ul>
                <li>Cormen 28.2</li>
                <li>Linear Algebra by Kenneth Hoffman Section 1.6</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://uva.onlinejudge.org/external/111/11149.html">uva.onlinejudge.org</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="matrix-transformations-transpose-rotation-of-matrix-representing-linear-transformations-using-matrix-">Matrix transformations (Transpose, Rotation of Matrix, Representing Linear transformations using matrix)</h3>
        <ul>
            <li>Suggested Reading - Linear Algebra By Kenneth Hoffman Section 3.1,3.2,3.4,3.7</li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=6877">topcoderpm=6877</a></li>
                <li>JPIX on Spoj</li>
            </ul>
            </li>
            <li>Determinant, Rank and Inverse of Matrix (Gaussean Elimination , Gauss Jordan Elimination)<ul>
                <li>28.4 Cormen</li>
                <li>Linear Algebra by Kenneth Chapter 1</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8174">topcoderpm=8174</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=6407&amp;rd=9986">topcoderpm=6407&amp;rd=9986</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8587">topcoderpm=8587</a></li>
                <li>HIGH on Spoj</li>
            </ul>
            </li>
        </ul>
        <h3 id="solving-system-of-linear-equations">Solving system of linear equations</h3>
        <ul>
            <li>Suggested Reading<ul>
                <li>28.3 Cormen</li>
                <li>Linear Algebra by Kenneth Chapter 1</li>
            </ul>
            </li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=3942&amp;rd=6520">topcoderpm=3942&amp;rd=6520</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="using-matrix-exponentiation-to-solve-recurrences">Using matrix exponentiation to solve recurrences</h3>
        <ul>
            <li>Suggested Reading<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=features&amp;d2=010408">topcoderd1=features&amp;d2=010408</a></li>
            </ul>
            </li>
            <li>Problems<ul>
                <li>REC, RABBIT1, PLHOP on spoj</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=6386">topcoderpm=6386</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=7262">topcoderpm=7262</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=6877">topcoderpm=6877</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="eigen-values-and-eigen-vectors">Eigen values and Eigen vectors</h3>
        <ul>
            <li>Problems - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=2423&amp;rd=4780">topcoderpm=2423&amp;rd=4780</a></li>
        </ul>
        <h3 id="polynomials">Polynomials</h3>
        <ul>
            <li>Roots of a polynomial (Prime factorization of a polynomial, Integer roots of a polynomial, All real roots of a polynomial)<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8273&amp;rd=10798">topcoderpm=8273&amp;rd=10798</a></li>
                <li>POLYEQ , ROOTCIPH on Spoj</li>
            </ul>
            </li>
            <li>Lagrange Interpolation<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=10239">topcoderpm=10239</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=8725">topcoderpm=8725</a></li>
            </ul>
            </li>
        </ul>
        <h2 id="permutation-cycles">Permutation cycles</h2>
        <ul>
            <li>Suggested Reading - Art of Computer Programming by Knuth Vol. 3</li>
            <li>Problems - ShuffleMethod, Permutation and WordGame on topcoder.</li>
        </ul>
        <h2 id="group-theory">Group Theory</h2>
        <ul>
            <li>Burnside Lemma</li>
            <li>Polya’s theorem</li>
            <li>Suggested Reading<ul>
                <li>Hernstein&#39;s topics in algebra</li>
                <li><a target="_blank" rel="noreferrer" href="http://petr-mitrichev.blogspot.com/2008/11/burnsides-lemma.html">http://petr-mitrichev.blogspot.com/2008/11/burnsides-lemma.html</a></li>
            </ul>
            </li>
            <li>Problems<ul>
                <li>TRANSP on spoj</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=9975">topcoderpm=9975</a></li>
            </ul>
            </li>
        </ul>
        <h2 id="generating-functions">Generating functions</h2>
        <ul>
            <li>Suggested Reading<ul>
                <li>Herbert Wilf&#39;s generating functionology</li>
                <li>Robert Sedgewick and Flajoulet&#39;s Combinatorial analysis</li>
            </ul>
            </li>
        </ul>
        <h2 id="data-structures">Data Structures</h2>
        <h3 id="basic">Basic</h3>
        <ul>
            <li>Arrays/Stacks/Queues</li>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/STPAR/">https://www.spoj.pl/problems/STPAR/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/SHOP/">https://www.spoj.pl/problems/SHOP/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/WATER/">https://www.spoj.pl/problems/WATER/</a></li>
            </ul>
            </li>
            <li>Reading:<ul>
                <li>CLRS: section 10.1</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=dataStructures">topcoderd1=tutorials&amp;d2=dataStructures</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="singly-doubly-linked-list">Singly/Doubly Linked List</h3>
        <ul>
            <li>Problems - <a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/POSTERS/">https://www.spoj.pl/problems/POSTERS/</a></li>
            <li>Reading: CLRS: section 10.2, Mark Allen Weies Chapter 3</li>
        </ul>
        <h3 id="hash-tables">Hash Tables</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/HASHIT/">https://www.spoj.pl/problems/HASHIT/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/CUCKOO/">https://www.spoj.pl/problems/CUCKOO/</a></li>
            </ul>
            </li>
            <li>Reading: CLRS: Chapter 11, Mark Allen Weies Chapter 5</li>
        </ul>
        <h3 id="circular-linked-list-queue">Circular linked list / queue</h3>
        <ul>
            <li>Problems - <a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/CTRICK/">https://www.spoj.pl/problems/CTRICK/</a></li>
        </ul>
        <h3 id="binary-n-ary-trees">Binary/n-ary trees</h3>
        <ul>
            <li>Reading<ul>
                <li>CLRS: section 10.4</li>
                <li>CLRS: Chapter 12</li>
                <li>Mark Allen Weies Chapter 4</li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=binarySearchRedBlack">topcoderd1=tutorials&amp;d2=binarySearchRedBlack</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="heaps">Heaps</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/PRO/">https://www.spoj.pl/problems/PRO/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/EXPEDI/">https://www.spoj.pl/problems/EXPEDI/</a></li>
            </ul>
            </li>
            <li>Reading : Mark Allen Weies Chapter 6</li>
        </ul>
        <h3 id="trie">Trie</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/MORSE/">https://www.spoj.pl/problems/MORSE/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/EMOTICON/">https://www.spoj.pl/problems/EMOTICON/</a></li>
            </ul>
            </li>
            <li>Reading</li>
        </ul>
        <h3 id="interval-trees-segment-trees">Interval trees / Segment Trees</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/ORDERS/">https://www.spoj.pl/problems/ORDERS/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/FREQUENT/">https://www.spoj.pl/problems/FREQUENT/</a></li>
            </ul>
            </li>
            <li>Reading</li>
        </ul>
        <h3 id="fenwick-binary-indexed-trees">Fenwick (Binary Indexed) trees</h3>
        <ul>
            <li>Problems - <a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/MATSUM/">https://www.spoj.pl/problems/MATSUM/</a></li>
            <li>Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=binaryIndexedTrees">topcoderd1=tutorials&amp;d2=binaryIndexedTrees</a></li>
        </ul>
        <h3 id="disjoint-data-structures">Disjoint data structures</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/BLINNET/">https://www.spoj.pl/problems/BLINNET/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/CHAIN/">https://www.spoj.pl/problems/CHAIN/</a></li>
            </ul>
            </li>
            <li>Reading:<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=disjointDataStructure">topcoderd1=tutorials&amp;d2=disjointDataStructure</a></li>
                <li>Mark Allen Weies Chapter 8</li>
            </ul>
            </li>
        </ul>
        <h3 id="range-minimum-query-rmq-">Range minimum Query (RMQ)</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/GSS1/">https://www.spoj.pl/problems/GSS1/</a></li>
            </ul>
            </li>
            <li>Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=lowestCommonAncestor">topcoderd1=tutorials&amp;d2=lowestCommonAncestor</a></li>
        </ul>
        <h3 id="customized-interval-segment-trees-augmented-ds-">Customized interval/segment trees (Augmented DS)</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/GSS3/">https://www.spoj.pl/problems/GSS3/</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/RRSCHED/">https://www.spoj.pl/problems/RRSCHED/</a></li>
            </ul>
            </li>
            <li>Reading: CLRS: Chapter 14 (augmented DS)</li>
        </ul>
        <h3 id="avl-trees">AVL Trees</h3>
        <ul>
            <li>Problem - <a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/ORDERS/">https://www.spoj.pl/problems/ORDERS/</a></li>
        </ul>
        <h3 id="miscellaneous">Miscellaneous</h3>
        <ul>
            <li>Splay Trees</li>
            <li>B/B+ Trees</li>
            <li>k-d Trees</li>
            <li>Red-black Trees</li>
            <li>Skip List</li>
            <li>Binomial/ Fibonacci heaps</li>
        </ul>
        <h3 id="exercices">Exercices</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/LAZYPROG/">https://www.spoj.pl/problems/LAZYPROG/</a> (Hint: Heaps)</li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/HELPR2D2/">https://www.spoj.pl/problems/HELPR2D2/</a> (Hint: Interval Trees)</li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/SAM/">https://www.spoj.pl/problems/SAM/</a> (Hint: Heaps)</li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/PRHYME/">https://www.spoj.pl/problems/PRHYME/</a> (Hint: Trie)</li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/HEAPULM/">https://www.spoj.pl/problems/HEAPULM/</a> (Hint: Interval Trees)</li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/CORNET/">https://www.spoj.pl/problems/CORNET/</a> (Hint: Disjoint)</li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/EXPAND/">https://www.spoj.pl/problems/EXPAND/</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/WPUZZLES/">https://www.spoj.pl/problems/WPUZZLES/</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.spoj.pl/problems/LIS2/">https://www.spoj.pl/problems/LIS2/</a></li>
        </ul>
        <h2 id="search-techniques-bruteforce-writing-techniques-randomized-algorithms-">Search Techniques/Bruteforce writing techniques/Randomized algorithms.</h2>
        <h3 id="backtracking-beginner-">Backtracking (beginner)</h3>
        <ul>
            <li>N queens problems</li>
            <li>Knights Tour</li>
            <li>Sudoku Problem</li>
            <li>Tiling Problem</li>
            <li>15 puzzle.</li>
        </ul>
        <h3 id="dancing-links-and-algorithm-x-given-by-knuth-advanced-">Dancing Links and Algorithm X given by Knuth (advanced)</h3>
        <ul>
            <li>problems - PRLGAME, SUDOKU, NQUEEN on SPOJ</li>
            <li>Suggested reading - <a target="_blank" rel="noreferrer" href="http://www-cs-faculty.stanford.edu/~uno/papers/dancing-color.ps.gz">http://www-cs-faculty.stanford.edu/~uno/papers/dancing-color.ps.gz</a></li>
        </ul>
        <h3 id="binary-search-beginner-">Binary Search (beginner)</h3>
        <ul>
            <li>problems - AGGRCOW on SPOJ. Refer the tutorial for more problems.</li>
            <li>finding all real roots of a polynomial using binary search (intermediate)</li>
            <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=binarySearch">topcoderd1=tutorials&amp;d2=binarySearch</a></li>
        </ul>
        <h3 id="ternary-search-intermediate-">Ternary Search (intermediate)</h3>
        <ul>
            <li>Problems<ul>
                <li><a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/KPPOLY/">spoj.pl/problems/KPPOLY/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.codechef.com/DEC09/problems/K1/">codechef.com/DEC09/problems/K1/</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=4705&amp;rd=7993">topcoderpm=4705&amp;rd=7993</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=7741&amp;rd=10671">topcoderpm=7741&amp;rd=10671</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=6464&amp;rd=9994">topcoderpm=6464&amp;rd=9994</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=3501&amp;rd=6529">topcoderpm=3501&amp;rd=6529</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.topcoder.com/stat?c=problem_statement&amp;pm=4567&amp;rd=6539">topcoderpm=4567&amp;rd=6539</a></li>
            </ul>
            </li>
        </ul>
        <h3 id="meet-in-the-middle-intermediate-">Meet in the middle (Intermediate)</h3>
        <ul>
            <li>problems - <a target="_blank" rel="noreferrer" href="http://www.spoj.pl/problems/MAXISET/">spoj.pl/problems/MAXISET/</a></li>
        </ul>
        <h3 id="hill-climbing-advanced-">Hill Climbing (Advanced)</h3>
        <h3 id="regular-iteration-to-reach-a-fixed-point-advanced-">Regular Iteration to reach a fixed point (Advanced)</h3>
        <ul>
            <li>Newton-Raphson method to find root of a mathematical function.</li>
            <li>Iterations to solve linear non homogeneous system of equations.</li>
        </ul>
        <h2 id="representing-sets-with-bitmasks-and-manipulating-bitmasks-beginner-">Representing sets with bitmasks and manipulating bitmasks (Beginner)</h2>
        <ul>
            <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=bitManipulation">topcoderd1=tutorials&amp;d2=bitManipulation</a></li>
            <li>problems - refer to the tutorial link in Suggested reading section.</li>
        </ul>
        <h2 id="general-programming-issues-in-contests">General programming issues in contests</h2>
        <ul>
            <li>Arithmetic Precision (Beginner)</li>
            <li>Suggested Reading - <a target="_blank" rel="noreferrer" href="http://www.topcoder.com/tc?module=Static&amp;d1=tutorials&amp;d2=integersReals">topcoderd1=tutorials&amp;d2=integersReals</a></li>
        </ul>
    </div>)
}