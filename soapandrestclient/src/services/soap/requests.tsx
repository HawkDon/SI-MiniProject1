import { ISoap } from "./soapService";

export const getAllSoaps = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:gs="http://www.baeldung.com/springsoap/gen">
<soapenv:Header/>
<soapenv:Body>
<gs:getAllSoapsRequest/>
</soapenv:Body>
</soapenv:Envelope>`;

export const addSoap = (
  soap: ISoap
) => `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:gs="http://www.baeldung.com/springsoap/gen" xmlns:art="http://www.baeldung.com/springsoap/gen">
<soapenv:Header/>
<soapenv:Body>
<art:addSoapRequest>
<gs:soap>
<gs:id>${soap.id}</gs:id>
<gs:name>${soap.name}</gs:name>
<gs:description>${soap.description}</gs:description>
<gs:price>${soap.price}</gs:price>
</gs:soap>
</art:addSoapRequest>
<gs:addSoapResponse/>
</soapenv:Body>
</soapenv:Envelope>`;

export const deleteSoap = (
  id: number
) => `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:gs="http://www.baeldung.com/springsoap/gen">
<soapenv:Header/>
<soapenv:Body>
<gs:removeSoapByIdRequest>
<gs:id>${id}</gs:id>
</gs:removeSoapByIdRequest>
</soapenv:Body>
</soapenv:Envelope>`;

export const requestSoapById = (
  id: number
) => `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:gs="http://www.baeldung.com/springsoap/gen">
<soapenv:Header/>
<soapenv:Body>
<gs:getSoapByIdRequest>
<gs:id>${id}</gs:id>
</gs:getSoapByIdRequest>
</soapenv:Body>
</soapenv:Envelope>`;

export const updateSoap = (
  soap: ISoap
) => `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:gs="http://www.baeldung.com/springsoap/gen" xmlns:art="http://www.baeldung.com/springsoap/gen">
<soapenv:Header/>
<soapenv:Body>
<art:updateSoapRequest>
<gs:soap>
<gs:id>${soap.id}</gs:id>
<gs:name>${soap.name}</gs:name>
<gs:description>${soap.description}</gs:description>
<gs:price>${soap.price}</gs:price>
</gs:soap>
</art:updateSoapRequest>
</soapenv:Body>
</soapenv:Envelope>`;
