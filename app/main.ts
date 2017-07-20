
interface System {
  import<T> (request: string): Promise<T>
}
declare var System: System;

console.log("aaaaaaaaa");
document.getElementsByTagName("body")[0].addEventListener("click", function(){
  System.import('./feature/feature').then((a) => {
    console.log(a);
  });
});

