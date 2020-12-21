// PouchDb to be used to maintain cached request storage
import Pouch from "pouchdb";

let pouch = new Pouch("cache", { auto_compaction: true, revs_limit: 100 });

// Invalidate cache every 15 minutes
setTimeout(
  () => {
    pouch
      .destroy()
      .then((done) => {
        pouch = new Pouch("cache");
      })
      .catch((err) => {
        console.log("An error occured while clearing document cache.");
      });
  },
  15 * 60 * 1000,
  pouch
);

export default pouch;