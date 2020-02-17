function solution(participant, completion) {
  participant.sort();
  console.log(participant);
  completion.sort();
  console.log(completion);
  for (var i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
    return participant[participant.length - 1];
  }
}

const participant = ["a", "b", "b", "c"];
const completion = ["a", "b", "c"];

console.log(solution(participant, completion));
