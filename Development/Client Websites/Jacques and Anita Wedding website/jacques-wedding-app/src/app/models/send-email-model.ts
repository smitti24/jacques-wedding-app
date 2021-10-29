export class SendEmailModel {
    public Name: string;
    public FromAddress: string;
    public Subject: string;
    public Message: string;
    public TelNo?: string;

    constructor() { this.Name = '', this.FromAddress = '', this.Subject = '', this.Message = '', this.TelNo = '' };

}
