//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.7 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.09.21 at 02:10:57 PM CEST 
//


package com.baeldung.springsoap.gen;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="soap" type="{http://www.baeldung.com/springsoap/gen}soap"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "soap"
})
@XmlRootElement(name = "getSoapByIdResponse")
public class GetSoapByIdResponse {

    @XmlElement(required = true)
    protected Soap soap;

    /**
     * Gets the value of the soap property.
     * 
     * @return
     *     possible object is
     *     {@link Soap }
     *     
     */
    public Soap getSoap() {
        return soap;
    }

    /**
     * Sets the value of the soap property.
     * 
     * @param value
     *     allowed object is
     *     {@link Soap }
     *     
     */
    public void setSoap(Soap value) {
        this.soap = value;
    }

}
