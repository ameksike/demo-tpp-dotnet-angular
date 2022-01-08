namespace demo_tpp_dotnet_angular.Models
{
    public class TokenRequest
    {
        public string? grant_type { get; set; }
        public string? client_id { get; set; }
        public string? client_secret { get; set; }
    }
}