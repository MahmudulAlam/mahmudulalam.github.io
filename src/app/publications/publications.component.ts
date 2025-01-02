import { Component } from '@angular/core';
import { Publication } from '../models/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent {
  conferences: Publication[] = [
  {
    title: "A Walsh Hadamard Derived Linear Vector Symbolic Architeture", 
    authors: "Mohammad Mahmudul Alam, Alexander Oberle, Edward Raff, Stella Biderman, Tim Oates, James Holt", 
    venues: ["In 38th Annual Conference on Neural Information Processing Systems (NeurIPS), December 2024, Vancouver, Canada.",
             "In 38th NeurIPS Workshop on NeuroAI: Fusing Neuroscience and AI for Intelligent Solutions Workshop, December 2024, Vancouver, Canada."
    ],  
    buttons: [["GitHub", "https://github.com/FutureComputing4AI/Hadamard-derived-Linear-Binding"],
              ["ArXiv", "https://arxiv.org/abs/2410.22669"], 
              ["PDF", "https://arxiv.org/pdf/2410.22669"]],  
    tag: "NeurIPS 2024",
    picture: "../../assets/publications/hlb.jpg"
  }, 

  {
    title: "Automated Virtual Product Placement and Assessment in Images using Diffusion Models", 
    authors: "Mohammad Mahmudul Alam, Negin Sokhandan, Emmett Goodman", 
    venues: ["In 6th AI for Content Creation (AI4CC) workshop at CVPR, June 2024, Seattle WA, USA."],  
    buttons: [["ArXiv", "https://arxiv.org/abs/2405.01130"],
              ["PDF", "https://arxiv.org/pdf/2405.01130"]],
    tag: "CVPR 2024",  
    picture: "../../assets/publications/vpp.jpg" 
  }, 

  {
    title: "Holographic Global Convolutional Networks for Long-Range Prediction Tasks in Malware Detection", 
    authors: "Mohammad Mahmudul Alam, Edward Raff, Stella Biderman, Tim Oates, James Holt", 
    venues: ["In 27th International Conference on Artificial Intelligence and Statistics (AISTATS), May 2024, Valencia, Spain.", 
             "In 38th Annual AAAI Workshop on Artificial Intelligence for Cyber Security (AICS), February 2024, Vancouver, Canada."],  
    buttons: [["GitHub", "https://github.com/FutureComputing4AI/HGConv"],
              ["PMLR", "https://proceedings.mlr.press/v238/mahmudul-alam24a/mahmudul-alam24a.pdf"], 
              ["ArXiv", "https://arxiv.org/abs/2403.17978"],
              ["PDF", "https://arxiv.org/pdf/2403.17978"]],
    tag: "AISTATS 2024",  
    picture: "../../assets/publications/hgconv.jpg"
  },

  {
    title: "Towards Generalization in Subitizing with Neuro-Symbolic Loss using Holographic Reduced Representations", 
    authors: "Mohammad Mahmudul Alam, Edward Raff, Tim Oates", 
    venues: ["In 38th AAAI Workshop on Neuro-Symbolic Learning and Reasoning in the Era of Large Language Models (NuCLeaR), February 2024, Vancouver, Canada."],  
    buttons: [["GitHub", "https://github.com/MahmudulAlam/Subitizing"],
              ["OpenReview", "https://openreview.net/forum?id=AOAP8sLYdt"], 
              ["ArXiv", "https://arxiv.org/abs/2312.15310"],
              ["PDF", "https://arxiv.org/pdf/2312.15310"]],
    tag: "AAAI 2024",  
    picture: "../../assets/publications/subitizing.jpg"
  },

  {
    title: "DDxT: Deep Generative Transformer Models for Differential Diagnosis", 
    authors: "Mohammad Mahmudul Alam, Edward Raff, Tim Oates, Cynthia Matuszek", 
    venues: ["In 37th NeurIPS Workshop on Deep Generative Models for Health, December 2023, New Orleans, LA, USA."],  
    buttons: [["GitHub", "https://github.com/MahmudulAlam/Differential-Diagnosis-Using-Transformers"],
              ["OpenReview", "https://openreview.net/forum?id=Uk6WMt9l9w"], 
              ["ArXiv", "https://arxiv.org/abs/2312.01242"],
              ["PDF", "https://arxiv.org/pdf/2312.01242"]],
    tag: "NeurIPS 2023",  
    picture: "../../assets/publications/ddxt.jpg"
  },

  {
    title: "Recasting Self-Attention with Holographic Reduced Representations", 
    authors: "Mohammad Mahmudul Alam, Edward Raff, Stella Biderman, Tim Oates, James Holt", 
    venues: ["In 40th International Conference on Machine Learning (ICML), July 2023, Honolulu, HI, USA."],  
    buttons: [["GitHub", "https://github.com/FutureComputing4AI/Hrrformer"],
              ["PMLR", "https://proceedings.mlr.press/v202/alam23a/alam23a.pdf"],
              ["KDD 2022", "https://kdd-milets.github.io/milets2022/papers/MILETS_2022_paper_5942.pdf"],  
              ["ArXiv", "https://arxiv.org/abs/2305.19534"],
              ["PDF", "https://arxiv.org/pdf/2305.19534"]],
    tag: "ICML 2023",  
    picture: "../../assets/publications/hrrformer.jpg"
  },

  {
    title: "Deploying Convolutional Networks on Untrusted Platforms Using 2D Holographic Reduced Representations", 
    authors: "Mohammad Mahmudul Alam, Edward Raff, Tim Oates, James Holt", 
    venues: ["In 39th International Conference on Machine Learning (ICML), July 2022, Baltimore, MD, USA."],  
    buttons: [["GitHub", "https://github.com/FutureComputing4AI/Connectionist-Symbolic-Pseudo-Secrets"],
              ["PMLR", "https://proceedings.mlr.press/v162/alam22a/alam22a.pdf"],  
              ["ArXiv", "https://arxiv.org/abs/2206.05893"],
              ["PDF", "https://arxiv.org/pdf/2206.05893"]],
    tag: "ICML 2022",  
    picture: "../../assets/publications/csps.jpg"
  },

  {
    title: "Detection and Tracking of Fingertips for Geometric Transformation of Objects in Virtual Environment", 
    authors: "Mohammad Mahmudul Alam, S. M. Mahbubur Rahman", 
    venues: ["In 16th ACS/IEEE International Conference on Computer Systems and Applications (AICCSA), November 2019, Abu Dhabi, UAE."],  
    buttons: [["GitHub", "https://github.com/MahmudulAlam/Fingertip-Mixed-Reality"],
              ["IEEE", "https://ieeexplore.ieee.org/document/9035256"],  
              ["Dataset", "https://github.com/MahmudulAlam/TI1K-Dataset"], 
              ["PDF", "https://drive.google.com/file/d/1o3Pmi-PZ_W2Vc-ZBm9cyVLMkizcXW4xO/view"]],
    tag: "IEEE",  
    picture: "../../assets/publications/geometric.jpg"
  },

];

  journals: Publication[] = [
  {
    title: "Unified learning approach for egocentric hand gesture recognition and fingertip detection", 
    authors: "Mohammad Mahmudul Alam, Mohammad Tariqul Islam, S. M. Mahbubur Rahman", 
    venues: ["Pattern Recognition, Elsevier Science Publishers, vol. 121, 2022."],  
    buttons: [["GitHub", "https://github.com/MahmudulAlam/Unified-Gesture-and-Fingertip-Detection"],
              ["Elsevier", "https://www.sciencedirect.com/science/article/abs/pii/S0031320321003824"],  
              ["Dataset", "https://github.com/MahmudulAlam/Unified-Gesture-and-Fingertip-Detection/tree/master/dataset"], 
              ["ArXiv", "https://arxiv.org/abs/2101.02047"],
              ["PDF", "https://arxiv.org/pdf/2101.02047"]],
    tag: "Elsevier",  
    picture: "../../assets/publications/unified.jpg"
  },

  {
    title: "Affine Transformation of Virtual 3D Object Using 2D Localization of Fingertips", 
    authors: "Mohammad Mahmudul Alam, S. M. Mahbubur Rahman", 
    venues: ["Virtual Reality & Intelligent Hardware, Elsevier Science Publishers, vol. 2, no. 6, pp. 534-555, 2020."],  
    buttons: [["GitHub", "https://github.com/MahmudulAlam/Fingertip-Mixed-Reality"],
              ["Elsevier", "https://www.sciencedirect.com/science/article/pii/S2096579620300917?via%3Dihub"],  
              ["Dataset", "https://github.com/MahmudulAlam/TI1K-Dataset"], 
              ["PDF", "https://pdf.sciencedirectassets.com/321628/1-s2.0-S2096579620X00076/1-s2.0-S2096579620300917/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDzXH9WaSMdP2En5krbzViHGNikIX1PYO8dAjsCeQQFtgIhAIGlXKFBHM3qJOynA8O9hR2p35lDR6y3%2Bzdx3a7zM9u%2FKrwFCLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMMDU5MDAzNTQ2ODY1IgzrnfxelK%2B6%2BGaJhaIqkAWX9KMdbDRrlNkhk0zONKGtu%2FD7dJpEupe%2FOw6OSnapRSWLAqY3X4WlfE6%2FFZkdcyUz0Nwd39b2VAVQgEn%2B5bCmypjsSrza1wm9byREROzIPJVOcBbHIZcH6kel9lgfjF%2BjqD4dp1koUpafdV7bCx48NAkFIijqVuhvzbUyTpfyKZNJpjYIJJ%2Fs4T1nu8r1qHb6e4SDf69MNuFuC%2Bj8jQooJAfTbMuLa%2BmCeV049%2FWTYRhvkDbMjBVxglRLrJziUVtTjbm1HLRh3S8v9L9RtiAJWdKR%2BmsPlzhj6YmhEGv45ph29z6b4MYtJONHHC4vmH3GhJzeZnef1ukJXrq4Cqj0lw3cJmXQGbFEQU33DS70Oy7NHMY%2F%2BH9rOvUacsst%2F3TqIQLbkc2m%2F6LuD3p%2B11LEVmesokPRt%2Fr0g5Wgq3ECexvbFNLw9PiivXkdOgcEaxG4vDZZbJNliF89KJfHWbtzL7i7%2BVv%2BqZRIRaYq9CNynh17xQaFe05IBcZSDStITeEJH%2FVBZh%2BcR%2FlF1ZwpOFmFIMqkWQ9pAGSkCC6RbHGfSHJrnfhcddVFZlqryK2Yyeg11Cmci6esl2M1olufzsHIxrEzAd1VTIPAn0guvCQ70Yk9fZp0RE3sb1k7j2hjKeDK%2FKk8%2BTw8NmbguTsUVxMNhnabZ8eStoa0GURorfglsLseXsaKLwJBW88z3Fqxm%2FE93XmMAgNGrLVhBv6IJM2Rx840sqgo9rMytDEc69cEVga1DLvoxUQjv3l2SIKNlC5QJF8xqp9VwdRXPMRkNBqB9BixsXWyaBjeDWir6mnCamhtxuw96SMBZZg2nT7Qd4sFDr6%2B6whzXSpsenyIi1xJVTGt7DP6fDFFPLfe08EsMzDU%2BNK7BjqwAf%2BJGJOzG86%2B0E3iMr%2BiLj8o66VO8lgmeeiTE7M6oG8W%2F1tkPD%2Fv%2FKI8UF0rnm54aq8SnWJpjdvabasxV%2FgojWR7BTmDcZirv%2BHIrcQf7AdspDqG9dzzSUbvN9HOd8hL%2BIwWEgZJpILV0lQVzZWyxAL6K28zbEbBQY%2FZu3gm9GZPX3Wpmb4%2FGo%2BH8LWhQWQOTHDBvzzWfqjOQegKDuQk6CdEPow%2BiE9KnsANgLw1uHfw&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250101T044942Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYQO5CZKTO%2F20250101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4125c13bedc990be518611e00116e1338f34a49786d42eae08f9f91b2ce85df5&hash=55cb8c728e0eed9e151178ec51aeafcff0706d527ea4aa7e7e4ad0a3f3377e39&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S2096579620300917&tid=spdf-c57f8081-4333-41e9-9a2e-315a4d49d63c&sid=733cdb3032728544fd5983791b4aad96dbd5gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=04035d01000905525507&rr=8fafe25fcc924ea5&cc=bd"]],
    tag: "Elsevier",  
    picture: "../../assets/publications/affine.jpg"
  },

  {
    title: "Machine Learning Approach of Automatic Identification and Counting of Blood Cells", 
    authors: "Mohammad Mahmudul Alam, Mohammad Tariqul Islam", 
    venues: ["Healthcare Technology Letters, IET, vol. 6, no. 4, pp. 103-108, 2019."],  
    buttons: [["GitHub", "https://github.com/MahmudulAlam/Automatic-Identification-and-Counting-of-Blood-Cells"],
              ["Wiley", "https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/htl.2018.5098"],  
              ["Dataset", "https://github.com/MahmudulAlam/Complete-Blood-Cell-Count-Dataset"], 
              ["PDF", "https://ietresearch.onlinelibrary.wiley.com/doi/epdf/10.1049/htl.2018.5098"]],
    tag: "IET",  
    picture: "../../assets/publications/cbc.jpg"
  },

]; 
}
