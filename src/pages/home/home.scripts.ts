import axios from "axios";
import pouch from "~/libs/pouch";

export async function getDocuments(endpoint: string){
  let doc : { _id: string, res?: string | object } | undefined; 
  
  doc = await pouch.get(endpoint).catch(err => {
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
        err => { 
          console.log("An error occurred while requesting endpoint: ", endpoint, "\n\n" ,err); 
          return {_id: endpoint, res: ''};
        }
      );
    }

    return d;
  });

  return doc;
};

export function normalize(str: string){
  if(!str) return;

  const val = str.split(" ")
            .map((s: string) => 
              s[0] + s.slice(1).toLowerCase())
            .join(' ');
  return val;
}