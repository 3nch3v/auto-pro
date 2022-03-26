namespace AutoPro.Common.Models.Ad
{
    public class AllAdsResponse
    {
        public int AdsCount { get; set; }

        public int PagesCount => (int)Math.Ceiling(AdsCount * 1.0 / 9);

        public int Page { get; set; }

        public int PreviousPage => Page - 1;

        public int NextPage => Page + 1;

        public bool HasPreviousPage => Page > 1;

        public bool HasNextPage => Page < PagesCount;

        public ICollection<SingleAdResponse>? Ads { get; set; }
    }
}
