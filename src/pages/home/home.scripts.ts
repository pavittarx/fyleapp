import axios from "axios";
import pouch from "~/libs/pouch";

export async function getDocuments(endpoint: string){
  let doc : { _id: string, res: string | object }; 
  
  pouch.get(endpoint).then(res => {
    doc = res;
  }).catch(err => {
    let d;

    if(err.error) {
      return axios.get(endpoint).then((res: { data: string | object }) => {
        d = {
          _id: endpoint,
          res: res?.data
        };
  
        pouch.put(d);

        return d;

      }).catch(
        err => console.log("An error occurred while requesting endpoint: ", endpoint, "\n\n" ,err)
      );
    }
  });

  return doc ? doc : {_id: '', res: ''};
};

export function normalize(str: string){
  const val = str.split(" ")
            .map((s: string) => 
              s[0] + s.slice(1).toLowerCase())
            .join(' ');
  console.log(val);
  return val;
}