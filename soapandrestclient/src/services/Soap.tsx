export interface ISoap {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const requestAndResponseFromXML = (
  xmlRequest: string
): Promise<ISoap[]> => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/ws", true);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const parser = new DOMParser();
        const docs = parser.parseFromString(this.response, "text/xml");
        const children = docs.getElementsByTagName("ns2:getAllSoapsResponse")[0]
          .childNodes;
        let soaps: ISoap[] = [];
        for (let index = 0; index < children.length; index++) {
          const element = children[index];
          const id = parseInt(element.childNodes[0].childNodes[0].nodeValue!);
          const name = element.childNodes[1].childNodes[0].nodeValue!;
          const description = element.childNodes[2].childNodes[0].nodeValue!;
          const price = parseInt(
            element.childNodes[3].childNodes[0].nodeValue!
          );
          soaps = [...soaps, { id, name, description, price }];
        }
        resolve(soaps);
      }
    };

    xhr.send(xmlRequest);
  });
};
