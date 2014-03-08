from project_module import project_object, image_object, link_object, challenge_object

p = project_object('cipher', 'Ciphers')
p.domain = 'http://www.aidansean.com/'
p.path = 'cipher'
p.preview_image_ = image_object('http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 408, 287)
p.github_repo_name = 'cipher'
p.mathjax = False
p.links.append(link_object(p.domain, 'cipher/', 'Live page'))
p.introduction = 'This page contains some simple ciphers. This was going to be extended to include some more sophisticated ciphers, but I didn\'t have the time or incentive to develop this page further.'
p.overview = '''At the moment the page currently supports two simple cipher:
<ul>
  <li>rot-13: A cipher where each character is shifted by 13 places along the alphabet</li>
  <li>Holly: A cipher developed by a friend as a child.  This page was made to crack that cipher for fun.</il>
</ul>'''
