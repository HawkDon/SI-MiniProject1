import { addSoap, deleteSoap, getAllSoaps, updateSoap } from "./xml/requests";

export interface ISoap {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const openXMLConnection = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/ws", true);
  xhr.setRequestHeader("Content-Type", "text/xml");

  return xhr;
};
export const getXmlAllSoaps = (): Promise<ISoap[]> => {
  return new Promise(resolve => {
    const xhr = openXMLConnection();
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const parser = new DOMParser();
        const docs = parser.parseFromString(this.response, "text/xml");
        const children = docs.getElementsByTagName("ns2:getAllSoapsResponse")[0]
          .childNodes;
        let soaps: ISoap[] = [];
        for (let index = 0; index < children.length; index++) {
          const element = children[index];
          const id = parseInt(
            element.childNodes[0].childNodes[0].nodeValue || ""
          );
          const name = element.childNodes[1].childNodes[0].nodeValue || "";
          const description =
            element.childNodes[2].childNodes[0].nodeValue || "";
          const price = parseInt(
            element.childNodes[3].childNodes[0].nodeValue || "0"
          );
          soaps = [...soaps, { id, name, description, price }];
        }
        resolve(soaps);
      }
    };

    xhr.send(getAllSoaps);
  });
};

export const deleteXmlSoap = (id: number): Promise<void> => {
  return new Promise(resolve => {
    const deleteRequest = deleteSoap(id);
    const xhr = openXMLConnection();
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 202) {
        resolve();
      }
    };
    xhr.send(deleteRequest);
  });
};

export const updateXmlSoap = (soap: ISoap): Promise<void> => {
  return new Promise(resolve => {
    const updateRequest = updateSoap(soap);
    const xhr = openXMLConnection();
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 202) {
        resolve();
      }
    };
    xhr.send(updateRequest);
  });
};

export const addXmlSoap = (soap: ISoap): Promise<ISoap> => {
  return new Promise(resolve => {
    const addRequest = addSoap(soap);
    const xhr = openXMLConnection();
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const parser = new DOMParser();
        const docs = parser.parseFromString(this.response, "text/xml");
        const id = parseInt(
          docs.getElementsByTagName("ns2:id")[0].childNodes[0].nodeValue!
        );
        const name = docs.getElementsByTagName("ns2:name")[0].childNodes[0]
          .nodeValue!;
        const description = docs.getElementsByTagName("ns2:description")[0]
          .childNodes[0].nodeValue!;
        const price = parseInt(
          docs.getElementsByTagName("ns2:price")[0].childNodes[0].nodeValue!
        );
        const soap = { id, name, description, price };

        resolve(soap);
      }
    };
    xhr.send(addRequest);
  });
};
