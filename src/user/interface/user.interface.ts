
export interface User {
  specversion: string; //
  type: string;
  source: string;
  time: string;
  datacontenttype: string; // attribute to determine whether it is indicated that the data value contains JSON data.
  id: string; // The unique alphanumeric subscription ID of the subject
  data: object; // The message payload data
  bytes: number; // Size of the payload in bytes
}
