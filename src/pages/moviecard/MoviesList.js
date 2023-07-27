// MovieList.js
import React from "react";
import Movie from "./movie.js";
import style from "./Movies.module.css";
const movies = [
  {
    id: 1,
    poster:
      "https://s3-alpha-sig.figma.com/img/51ae/8c12/a61ba7955017cb9af5323e1deda3fb73?Expires=1691366400&Signature=BBx~ahoU5N8hs97vMcTbS51sl1ts44gt-fnaLmkVtm9momKfiizrAp3nzmnZlhZqagn3GZETIr8tapUuFoiGqg1kmqZ1FS8RbosqBMP-S-mIHMV07mA91~F9LdzsV0D5WKEAkyRN9JpNbDO2FlzEw1-1RsxaC~rZIxEokMuxYs~LwSdgP~Z81gW26MVyNA3yNbRT0K5r8aBjh-OQ5i9ID800Yl0TPbvfVv9e4hMMR2I3yd9-mAxY7oqY7j6SoPKtkRtUPkF8Tl670kjby0eUOVtQ~sThy43U2X1jXEspOLn5dpr7yV1yHrSx3~v5qKpFsVi5bCgQ3WgrpanbBwTnFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Stranger Things",
    star: 4,
  },
  {
    id: 2,
    poster:
      "https://s3-alpha-sig.figma.com/img/879e/3fac/72ecdd3626635aaae3878465f4a590ce?Expires=1691366400&Signature=SR45fsDKoQJWhqQACHXsOi6~ZI5JNPjUCsmef0OyaTdSoGZbadHHvBxT4po3rff4aALuajmyg4tRf3JasEzGnlCzs2z0tp30R1EUpc8eFv9~hwCwu-xzSO1eUzY-MKrC~37EJ26okEeu3hUokQzui~q4vU7PC1KhZ-ireUMDJolM~WzDpxxC2FHR1a3q3VK63ADg47okzoKyDq85inoSl~dF9flUQvj2dnivYrHfDG1Qm5EV9NcYFGZlyGNbOjLqro3ZwNGE53LycGBZvoHJ9WOGKmdvgpYSBTO1u9LiJnN1OTGrNCucU1Xx5ObHJIxBlsCxIJOqXRUIfoJZ5a86eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Vikings",
    star: 5,
  },
  {
    id: 3,
    poster:
      "https://s3-alpha-sig.figma.com/img/6361/c95b/9634e686da00c5bba4875b04da0f6141?Expires=1691366400&Signature=lvcRGTbidwggu06VvukgsaqiW2~CBpMtJqtDKzoaPqL~Rr8MI37k97ewbhk1IkwpPNSDaA39m9pKF6lCK4MQO9Y6c7HqfCIbZIPjwNz3gvqQNAY1D4VTHtZuviyr7pqK7D2ijPY5TG7YbSNcU8dt5AGiHsoV1RRkiAHuugPTb24wKHgSRDbJXpeiOf~F7ch5E1TaUtaYwSQuSRBN7rzARhGuThiiYK2I7FzxPTQh9WNpLYTtPPSUWjB7wZPOWd0u1-F12C3IcxkRO2RLUJ4NmyRC3BHeabEnoqGmozqEsU8A51Ab56x0M4ofAFbMacrzTdkEarDpzaAjrOUztS0krg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Avatar",
    star: 3,
  },
  {
    id: 4,
    poster:
      "https://s3-alpha-sig.figma.com/img/70e1/896e/13bfee17daf5d656a03f70eb332bbcfe?Expires=1691366400&Signature=gK~-qdtulmuAqPhiLoMy8owyQFhr5Xaa4nKLRNZSedyDYa05zO5LfF75zmIzyiDGoX3oTWVWnAKgfSuvZlJYi34gOswQb4j6NiuNB25pgEfvfhRskGAa6uIYqYWqSMOy4ebE~tr1SpmI0bNxOa1ZIzKbH4AUJzpp9f9-BUSZkLfP7ljOFegEYd3AwXelXYxmzbgGAx43i31AnWtl9m~HCp~BZu59y~fmduS-MJ~2eh9mqWCQB1EcNbRY4Q5Ud~nPn7daV372thV4t3IASmAv1LgKEMX7uVYDnQgxCtEz8zbH6rb-nESksIsv7l2zzpzjmQgx5R3D6q8ObNvtsMQ-7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Dark Season 3",
    star: 5,
  },
  {
    id: 1,
    poster:
      "https://s3-alpha-sig.figma.com/img/51ae/8c12/a61ba7955017cb9af5323e1deda3fb73?Expires=1691366400&Signature=BBx~ahoU5N8hs97vMcTbS51sl1ts44gt-fnaLmkVtm9momKfiizrAp3nzmnZlhZqagn3GZETIr8tapUuFoiGqg1kmqZ1FS8RbosqBMP-S-mIHMV07mA91~F9LdzsV0D5WKEAkyRN9JpNbDO2FlzEw1-1RsxaC~rZIxEokMuxYs~LwSdgP~Z81gW26MVyNA3yNbRT0K5r8aBjh-OQ5i9ID800Yl0TPbvfVv9e4hMMR2I3yd9-mAxY7oqY7j6SoPKtkRtUPkF8Tl670kjby0eUOVtQ~sThy43U2X1jXEspOLn5dpr7yV1yHrSx3~v5qKpFsVi5bCgQ3WgrpanbBwTnFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Stranger Things",
    star: 4,
  },
  {
    id: 2,
    poster:
      "https://s3-alpha-sig.figma.com/img/879e/3fac/72ecdd3626635aaae3878465f4a590ce?Expires=1691366400&Signature=SR45fsDKoQJWhqQACHXsOi6~ZI5JNPjUCsmef0OyaTdSoGZbadHHvBxT4po3rff4aALuajmyg4tRf3JasEzGnlCzs2z0tp30R1EUpc8eFv9~hwCwu-xzSO1eUzY-MKrC~37EJ26okEeu3hUokQzui~q4vU7PC1KhZ-ireUMDJolM~WzDpxxC2FHR1a3q3VK63ADg47okzoKyDq85inoSl~dF9flUQvj2dnivYrHfDG1Qm5EV9NcYFGZlyGNbOjLqro3ZwNGE53LycGBZvoHJ9WOGKmdvgpYSBTO1u9LiJnN1OTGrNCucU1Xx5ObHJIxBlsCxIJOqXRUIfoJZ5a86eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Vikings",
    star: 5,
  },
  {
    id: 3,
    poster:
      "https://s3-alpha-sig.figma.com/img/6361/c95b/9634e686da00c5bba4875b04da0f6141?Expires=1691366400&Signature=lvcRGTbidwggu06VvukgsaqiW2~CBpMtJqtDKzoaPqL~Rr8MI37k97ewbhk1IkwpPNSDaA39m9pKF6lCK4MQO9Y6c7HqfCIbZIPjwNz3gvqQNAY1D4VTHtZuviyr7pqK7D2ijPY5TG7YbSNcU8dt5AGiHsoV1RRkiAHuugPTb24wKHgSRDbJXpeiOf~F7ch5E1TaUtaYwSQuSRBN7rzARhGuThiiYK2I7FzxPTQh9WNpLYTtPPSUWjB7wZPOWd0u1-F12C3IcxkRO2RLUJ4NmyRC3BHeabEnoqGmozqEsU8A51Ab56x0M4ofAFbMacrzTdkEarDpzaAjrOUztS0krg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Avatar",
    star: 3,
  },
  {
    id: 4,
    poster:
      "https://s3-alpha-sig.figma.com/img/70e1/896e/13bfee17daf5d656a03f70eb332bbcfe?Expires=1691366400&Signature=gK~-qdtulmuAqPhiLoMy8owyQFhr5Xaa4nKLRNZSedyDYa05zO5LfF75zmIzyiDGoX3oTWVWnAKgfSuvZlJYi34gOswQb4j6NiuNB25pgEfvfhRskGAa6uIYqYWqSMOy4ebE~tr1SpmI0bNxOa1ZIzKbH4AUJzpp9f9-BUSZkLfP7ljOFegEYd3AwXelXYxmzbgGAx43i31AnWtl9m~HCp~BZu59y~fmduS-MJ~2eh9mqWCQB1EcNbRY4Q5Ud~nPn7daV372thV4t3IASmAv1LgKEMX7uVYDnQgxCtEz8zbH6rb-nESksIsv7l2zzpzjmQgx5R3D6q8ObNvtsMQ-7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Dark Season 3",
    star: 5,
  },
  {
    id: 1,
    poster:
      "https://s3-alpha-sig.figma.com/img/51ae/8c12/a61ba7955017cb9af5323e1deda3fb73?Expires=1691366400&Signature=BBx~ahoU5N8hs97vMcTbS51sl1ts44gt-fnaLmkVtm9momKfiizrAp3nzmnZlhZqagn3GZETIr8tapUuFoiGqg1kmqZ1FS8RbosqBMP-S-mIHMV07mA91~F9LdzsV0D5WKEAkyRN9JpNbDO2FlzEw1-1RsxaC~rZIxEokMuxYs~LwSdgP~Z81gW26MVyNA3yNbRT0K5r8aBjh-OQ5i9ID800Yl0TPbvfVv9e4hMMR2I3yd9-mAxY7oqY7j6SoPKtkRtUPkF8Tl670kjby0eUOVtQ~sThy43U2X1jXEspOLn5dpr7yV1yHrSx3~v5qKpFsVi5bCgQ3WgrpanbBwTnFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Stranger Things",
    star: 4,
  },
  {
    id: 2,
    poster:
      "https://s3-alpha-sig.figma.com/img/879e/3fac/72ecdd3626635aaae3878465f4a590ce?Expires=1691366400&Signature=SR45fsDKoQJWhqQACHXsOi6~ZI5JNPjUCsmef0OyaTdSoGZbadHHvBxT4po3rff4aALuajmyg4tRf3JasEzGnlCzs2z0tp30R1EUpc8eFv9~hwCwu-xzSO1eUzY-MKrC~37EJ26okEeu3hUokQzui~q4vU7PC1KhZ-ireUMDJolM~WzDpxxC2FHR1a3q3VK63ADg47okzoKyDq85inoSl~dF9flUQvj2dnivYrHfDG1Qm5EV9NcYFGZlyGNbOjLqro3ZwNGE53LycGBZvoHJ9WOGKmdvgpYSBTO1u9LiJnN1OTGrNCucU1Xx5ObHJIxBlsCxIJOqXRUIfoJZ5a86eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Vikings",
    star: 5,
  },
  {
    id: 3,
    poster:
      "https://s3-alpha-sig.figma.com/img/6361/c95b/9634e686da00c5bba4875b04da0f6141?Expires=1691366400&Signature=lvcRGTbidwggu06VvukgsaqiW2~CBpMtJqtDKzoaPqL~Rr8MI37k97ewbhk1IkwpPNSDaA39m9pKF6lCK4MQO9Y6c7HqfCIbZIPjwNz3gvqQNAY1D4VTHtZuviyr7pqK7D2ijPY5TG7YbSNcU8dt5AGiHsoV1RRkiAHuugPTb24wKHgSRDbJXpeiOf~F7ch5E1TaUtaYwSQuSRBN7rzARhGuThiiYK2I7FzxPTQh9WNpLYTtPPSUWjB7wZPOWd0u1-F12C3IcxkRO2RLUJ4NmyRC3BHeabEnoqGmozqEsU8A51Ab56x0M4ofAFbMacrzTdkEarDpzaAjrOUztS0krg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Avatar",
    star: 3,
  },
  {
    id: 4,
    poster:
      "https://s3-alpha-sig.figma.com/img/70e1/896e/13bfee17daf5d656a03f70eb332bbcfe?Expires=1691366400&Signature=gK~-qdtulmuAqPhiLoMy8owyQFhr5Xaa4nKLRNZSedyDYa05zO5LfF75zmIzyiDGoX3oTWVWnAKgfSuvZlJYi34gOswQb4j6NiuNB25pgEfvfhRskGAa6uIYqYWqSMOy4ebE~tr1SpmI0bNxOa1ZIzKbH4AUJzpp9f9-BUSZkLfP7ljOFegEYd3AwXelXYxmzbgGAx43i31AnWtl9m~HCp~BZu59y~fmduS-MJ~2eh9mqWCQB1EcNbRY4Q5Ud~nPn7daV372thV4t3IASmAv1LgKEMX7uVYDnQgxCtEz8zbH6rb-nESksIsv7l2zzpzjmQgx5R3D6q8ObNvtsMQ-7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Dark Season 3",
    star: 5,
  },
  {
    id: 1,
    poster:
      "https://s3-alpha-sig.figma.com/img/51ae/8c12/a61ba7955017cb9af5323e1deda3fb73?Expires=1691366400&Signature=BBx~ahoU5N8hs97vMcTbS51sl1ts44gt-fnaLmkVtm9momKfiizrAp3nzmnZlhZqagn3GZETIr8tapUuFoiGqg1kmqZ1FS8RbosqBMP-S-mIHMV07mA91~F9LdzsV0D5WKEAkyRN9JpNbDO2FlzEw1-1RsxaC~rZIxEokMuxYs~LwSdgP~Z81gW26MVyNA3yNbRT0K5r8aBjh-OQ5i9ID800Yl0TPbvfVv9e4hMMR2I3yd9-mAxY7oqY7j6SoPKtkRtUPkF8Tl670kjby0eUOVtQ~sThy43U2X1jXEspOLn5dpr7yV1yHrSx3~v5qKpFsVi5bCgQ3WgrpanbBwTnFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Stranger Things",
    star: 4,
  },
  {
    id: 2,
    poster:
      "https://s3-alpha-sig.figma.com/img/879e/3fac/72ecdd3626635aaae3878465f4a590ce?Expires=1691366400&Signature=SR45fsDKoQJWhqQACHXsOi6~ZI5JNPjUCsmef0OyaTdSoGZbadHHvBxT4po3rff4aALuajmyg4tRf3JasEzGnlCzs2z0tp30R1EUpc8eFv9~hwCwu-xzSO1eUzY-MKrC~37EJ26okEeu3hUokQzui~q4vU7PC1KhZ-ireUMDJolM~WzDpxxC2FHR1a3q3VK63ADg47okzoKyDq85inoSl~dF9flUQvj2dnivYrHfDG1Qm5EV9NcYFGZlyGNbOjLqro3ZwNGE53LycGBZvoHJ9WOGKmdvgpYSBTO1u9LiJnN1OTGrNCucU1Xx5ObHJIxBlsCxIJOqXRUIfoJZ5a86eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Vikings",
    star: 5,
  },
  {
    id: 3,
    poster:
      "https://s3-alpha-sig.figma.com/img/6361/c95b/9634e686da00c5bba4875b04da0f6141?Expires=1691366400&Signature=lvcRGTbidwggu06VvukgsaqiW2~CBpMtJqtDKzoaPqL~Rr8MI37k97ewbhk1IkwpPNSDaA39m9pKF6lCK4MQO9Y6c7HqfCIbZIPjwNz3gvqQNAY1D4VTHtZuviyr7pqK7D2ijPY5TG7YbSNcU8dt5AGiHsoV1RRkiAHuugPTb24wKHgSRDbJXpeiOf~F7ch5E1TaUtaYwSQuSRBN7rzARhGuThiiYK2I7FzxPTQh9WNpLYTtPPSUWjB7wZPOWd0u1-F12C3IcxkRO2RLUJ4NmyRC3BHeabEnoqGmozqEsU8A51Ab56x0M4ofAFbMacrzTdkEarDpzaAjrOUztS0krg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Avatar",
    star: 3,
  },
  {
    id: 4,
    poster:
      "https://s3-alpha-sig.figma.com/img/70e1/896e/13bfee17daf5d656a03f70eb332bbcfe?Expires=1691366400&Signature=gK~-qdtulmuAqPhiLoMy8owyQFhr5Xaa4nKLRNZSedyDYa05zO5LfF75zmIzyiDGoX3oTWVWnAKgfSuvZlJYi34gOswQb4j6NiuNB25pgEfvfhRskGAa6uIYqYWqSMOy4ebE~tr1SpmI0bNxOa1ZIzKbH4AUJzpp9f9-BUSZkLfP7ljOFegEYd3AwXelXYxmzbgGAx43i31AnWtl9m~HCp~BZu59y~fmduS-MJ~2eh9mqWCQB1EcNbRY4Q5Ud~nPn7daV372thV4t3IASmAv1LgKEMX7uVYDnQgxCtEz8zbH6rb-nESksIsv7l2zzpzjmQgx5R3D6q8ObNvtsMQ-7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Dark Season 3",
    star: 5,
  },
];
const MoviesList = () => {
  return (
    <div className={style.movie_list}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
