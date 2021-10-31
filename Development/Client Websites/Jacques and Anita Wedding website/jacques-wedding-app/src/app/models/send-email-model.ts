export class SendEmailModel {
    public Name: string;
    public FromAddress: string;
    public Subject: string;
    public Message: string;
    public TelNo?: string;
    public IsVegetarian: string;
    public SongRequest: string

    constructor() { this.Name = '', this.FromAddress = '', this.Subject = '', this.Message = '', this.TelNo = '', this.IsVegetarian = '', this.SongRequest = '' };

}
